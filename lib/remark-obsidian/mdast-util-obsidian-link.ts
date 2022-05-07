import {getHref, parseLinkBody} from "./lib/obsidian-link-util.js"
import {slug, slugPath} from "./slugger.js";
import {all} from "remark-rehype";

type ObsidianLinkMdastNode = {
    type: string,
    embedType: string,
    value: string,
    children: any[]
}


export function obsidianLinkFromMarkdown() {
    return {
        enter: {
            obsidianLink(token) {
                this.enter(
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
                let node = this.exit(token)
                node.file = link.file
                node.heading = link.heading
                node.children[0].value = link.displayText
            }
        }
    }
}

export function obsidianLinkToMarkdown({getFileSlug = slugPath, getHeadingSlug = slug}) {
    return {
        handlers: {
            obsidianLink(node, _, context, safeOptions) {
                return `[${node.displayText}](${getFileSlug(node.file)}#${getHeadingSlug(node.heading)})`
            }
        }
    }
}

export function obsidianLinkToHast(getFileSlug = slugPath, getHeadingSlug = slug) {
    return function handler(h, node) {
        const props = {href: getHref({file: node.file, heading: node.heading}, getFileSlug, getHeadingSlug)}
        return h(node, "a", props, all(h, node))
    }
}