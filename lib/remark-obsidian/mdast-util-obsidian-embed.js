import {all} from "remark-rehype";
import {determineEmbedType} from "./lib/obsidian-embed-util.js";

function defaultMarkdownEmbedHandlers(getEmbeddedMarkdown, getImageUri) {
    return {
        image(body) {
            let [imageHref, _] = body.split("|")
            let imageUri = getImageUri(imageHref)
            return `[${imageHref}](${imageUri})`
        }
        ,
        fileEmbed(body) {
            return `# ${body}\n` + getEmbeddedMarkdown(body)
        }
    }
}

export function obsidianEmbedFromMarkdown() {
    return {
        enter: {
            obsidianEmbed(token) {
                this.enter(
                    {
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
                let node = this.exit(token)
                node.value = linkBody
                node.embedType = determineEmbedType(linkBody)
            }
        }
    }
}

export function obsidianEmbedToMarkdown(getEmbeddedMarkdown, getImageUri = encodeURI, handlers = defaultMarkdownEmbedHandlers(getEmbeddedMarkdown, getImageUri)) {
    return {
        handlers: {
            obsidianEmbed(node, _, context, safeOptions) {
                return handlers[node.embedType](node.value)
            }
        }
    }
}

export function obsidianEmbedToHast(getEmbeddedSyntaxTree, getImageUri = encodeURI) {
    return function handler(h, node) {
        return defaultHastEmbedHandlers(getEmbeddedSyntaxTree, getImageUri)[node.embedType](h, node)
    }
}

function defaultHastEmbedHandlers(getEmbeddedSyntaxTree, getImageUri = encodeURI) {
    return {
        image(h, node) {
            let [imageHref, dimensions] = node.value.split("|")
            let imageUri = getImageUri(imageHref)
            let props = {src: imageUri, alt: imageHref}
            if (dimensions) {
                let [width, height] = dimensions.split("x")
                props = {
                    style: `width: ${width}px; height: ${height}px`,
                    ...props
                }
            }
            return h(node, "img", props, all(h, node))
        },
        fileEmbed(h, node) {
            return getEmbeddedSyntaxTree(node.value)
        }
    }
}
