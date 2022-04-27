import fs from "fs"
import {micromark} from "micromark"
import {obsidianLinks, obsidianLinksHtml} from "./micromark-extension-obsidian-link.js";
import {obsidianEmbed, obsidianEmbedHtml} from "./micromark-extension-obsidian-embed.js"


const microMarkOptions = {
    extensions: [obsidianLinks, obsidianEmbed],
    htmlExtensions: [
        obsidianEmbedHtml(() => "<div>hello world</div>"),
    ]
}
const buf = fs.readFileSync("LC Circuit.md")
const out = micromark(buf, microMarkOptions)
console.log(out)
