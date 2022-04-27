import {obsidianEmbed} from "./micromark-extension-obsidian-embed.js";
import {obsidianEmbedFromMarkdown} from "./mdast-util-obsidian-embed.js";

export default function remarkObsidianLink(options) {
    const data = this.data()

    add("micromarkExtensions", obsidianEmbed)
    add("fromMarkdownExtensions", obsidianEmbedFromMarkdown())
    add("toMarkdownExtensions", obsidianEmbedFromMarkdown(options))

    function add(field, value) {
        const list = (
            data[field] ? data[field] : (data[field] = [])
        )
        list.push(value)
    }
}
