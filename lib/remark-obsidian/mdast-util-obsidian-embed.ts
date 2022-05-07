import {all} from "remark-rehype";
import {determineEmbedType, EmbedType} from "./lib/obsidian-embed-util";

import {Extension as FromMarkdownExtension} from "mdast-util-from-markdown"
import {Options as ToMarkdownExtension} from "mdast-util-to-markdown"
import {Node as MdastNode} from "mdast-util-to-markdown/lib"
import {H} from "mdast-util-to-hast"

export type EmbedHandlers = {
    image: (href: string) => string,
    fileEmbed: (filename: string) => string,
}

function defaultMarkdownEmbedHandlers(getEmbeddedMarkdown: (filename: string) => string, getImageUri: (href: string) => string): EmbedHandlers {
    return {
        image(body) {
            let [imageHref, _] = body.split("|")
            let imageUri = getImageUri(imageHref)
            return `[${imageHref}](${imageUri})`
        },
        fileEmbed(body) {
            return `# ${body}\n` + getEmbeddedMarkdown(body)
        }
    }
}

type ObsidianEmbedMdastNode = {
    type: string,
    embedType?: EmbedType,
    value: string,
    children: any[]
}

export function obsidianEmbedFromMarkdown(): FromMarkdownExtension {
    return {
        enter: {
            obsidianEmbed(token) {
                this.enter(
                    // @ts-ignore
                    <ObsidianEmbedMdastNode>{
                        type: "obsidianEmbed",
                        embedType: "",
                        value: "",
                        children: []
                    },
                    token
                )
                this.buffer()
            }
        },
        exit: {
            obsidianEmbed(token) {
                let linkBody = this.resume()
                let node: ObsidianEmbedMdastNode= this.exit(token) as ObsidianEmbedMdastNode
                node.value = linkBody
                node.embedType = determineEmbedType(linkBody)
            }
        }
    }
}

export function obsidianEmbedToMarkdown({
                                            getEmbeddedMarkdown,
                                            getImageUri = encodeURI,
                                            handlers = defaultMarkdownEmbedHandlers(getEmbeddedMarkdown, getImageUri)
                                        }: ToMarkdownOptions): ToMarkdownExtension {
    return {
        handlers: {
            obsidianEmbed(node, _, context, safeOptions) {
                // @ts-ignore
                return handlers[node.embedType](node.value)
            }
        }
    }
}

export type ToMarkdownOptions = {
    getEmbeddedMarkdown: (filename: string) => string,
    getImageUri?: (filename: string) => string,
    handlers?: EmbedHandlers
}


export function obsidianEmbedToHast({getEmbeddedSyntaxTree, getImageUri = encodeURI} : ToHastOptions) {
    return function handler(h: Function, node: ObsidianEmbedMdastNode) {
        // @ts-ignore
        return defaultHastEmbedHandlers(getEmbeddedSyntaxTree, getImageUri)[node.embedType](h, node)
    }
}

export type ToHastOptions = {
    getEmbeddedSyntaxTree: (filename: string) => any,
    getImageUri?: (href: string) => string
}


function defaultHastEmbedHandlers(getEmbeddedSyntaxTree: any, getImageUri: (uri: string) => string = encodeURI) {
    return {
        image(h: H, node: ObsidianEmbedMdastNode) {
            let [imageHref, dimensions] = node.value.split("|")
            let imageUri = getImageUri(imageHref)
            let props: any = {src: imageUri, alt: imageHref}
            if (dimensions) {
                let [width, height] = dimensions.split("x")
                props = {
                    style: `width: ${width}px; height: ${height}px`,
                    ...props
                }
            }
            return h(<MdastNode>node, "img", props)
        },
        fileEmbed(h: Function, node: ObsidianEmbedMdastNode) {
            return getEmbeddedSyntaxTree(node.value)
        }
    }
}
