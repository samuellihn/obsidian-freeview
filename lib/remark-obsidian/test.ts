
import {obsidianMathFlow} from "./micromark-extension-obsidian-math";
import {obsidianLinks} from "./micromark-extension-obsidian-link";
import fs from "fs"
import {micromark} from "micromark"
// import {mathHtml} from "micromark-extension-math"


const microMarkOptions = {
    extensions: [obsidianMathFlow, obsidianLinks],
    htmlExtensions: [
        // mathHtml()
    ]
}
const buf = fs.readFileSync("LC Circuit.md")
const out = micromark(buf, microMarkOptions)
console.log(out)
