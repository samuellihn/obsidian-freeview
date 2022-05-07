import {obsidianLinks} from "./micromark-extension-obsidian-link";
import {obsidianLinkFromMarkdown, obsidianLinkToMarkdown} from "./mdast-util-obsidian-link";

export default function remarkObsidianLink(options = {}) {
    const data = this.data()

    add("micromarkExtensions", obsidianLinks)
    add("fromMarkdownExtensions", obsidianLinkFromMarkdown())
    add("toMarkdownExtensions", obsidianLinkToMarkdown(options))

    function add(field, value) {
        const list = (
            data[field] ? data[field] : (data[field] = [])
        )
        list.push(value)
    }
}
