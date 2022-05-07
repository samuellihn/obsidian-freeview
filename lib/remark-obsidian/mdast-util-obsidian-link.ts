import {getHref, parseLinkBody} from "./lib/obsidian-link-util"
import {slug, slugPath} from "./slugger";
import {all} from "remark-rehype";

import {Extension as FromMarkdownExtension} from "mdast-util-from-markdown"
import {Options as ToMarkdownExtension} from "mdast-util-to-markdown"
import {Node as MdastNode} from "mdast-util-to-markdown/lib"
import {H} from "mdast-util-to-hast"

type ObsidianLinkMdastNode = {
    type: string,
    file: string,
    heading: string,
    children: any[]
}


export function obsidianLinkFromMarkdown(): FromMarkdownExtension {
    return {
        enter: {
            obsidianLink(token) {
                this.enter(
                    // @ts-ignore
                    <ObsidianLinkMdastNode>
                        {
                            type: "obsidianLink",
                            file: "",
                            heading: "",
                            children: [{type: "text", value: ""}]
                        },
                    token
                )
                this.buffer()
            }
        },
        exit: {
            obsidianLink(token) {
                let linkBody = this.resume()
                let link = parseLinkBody(linkBody)
                let node: ObsidianLinkMdastNode = this.exit(token) as ObsidianLinkMdastNode
                node.file = link.file
                node.heading = link.heading
                node.children[0].value = link.displayText
            }
        }
    }
}

export function obsidianLinkToMarkdown({getFileSlug = slugPath, getHeadingSlug = slug}): ToMarkdownExtension {
    return {
        handlers: {
            obsidianLink(node, _, context, safeOptions) {
                return `[${node.displayText}](${getFileSlug(node.file)}#${getHeadingSlug(node.heading)})`
            }
        }
    }
}

export function obsidianLinkToHast(getFileSlug = slugPath, getHeadingSlug = slug) {
    return function handler(h: H, node: ObsidianLinkMdastNode) {
        const props = {href: getHref({file: node.file, heading: node.heading}, getFileSlug, getHeadingSlug)}
        return h(node as MdastNode, "a", props, all(h, node as MdastNode))
    }
}