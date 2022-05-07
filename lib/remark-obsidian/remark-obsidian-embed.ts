import {obsidianEmbed} from "./micromark-extension-obsidian-embed";
import {EmbedHandlers, obsidianEmbedFromMarkdown, obsidianEmbedToMarkdown} from "./mdast-util-obsidian-embed";
import {ToMarkdownOptions} from "./mdast-util-obsidian-embed"

export default function remarkObsidianLink(options: ToMarkdownOptions = {getEmbeddedMarkdown: () => ""}) {
    // @ts-ignore
    const data = this.data()

    add("micromarkExtensions", obsidianEmbed)
    add("fromMarkdownExtensions", obsidianEmbedFromMarkdown())
    add("toMarkdownExtensions", obsidianEmbedToMarkdown(options))

    function add(field: any, value: any) {
        const list = (
            data[field] ? data[field] : (data[field] = [])
        )
        list.push(value)
    }
}

