import {obsidianLinks} from "./micromark-extension-obsidian-link";
import {obsidianLinkFromMarkdown, obsidianLinkToMarkdown} from "./mdast-util-obsidian-link";

export default function remarkObsidianLink(options: Options = {}) {

    // @ts-ignore
    const data = this.data()

    add("micromarkExtensions", obsidianLinks)
    add("fromMarkdownExtensions", obsidianLinkFromMarkdown())
    add("toMarkdownExtensions", obsidianLinkToMarkdown(options))

    function add(field: any, value: any) {
        const list = (
            data[field] ? data[field] : (data[field] = [])
        )
        list.push(value)
    }
}
export type Options = {
    getFileSlug?: (text: string) => string,
    getHeadingSlug?: (text: string) => string
}
