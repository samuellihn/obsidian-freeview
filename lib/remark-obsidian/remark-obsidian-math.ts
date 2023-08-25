
import {obsidianMathFlow} from "./micromark-extension-obsidian-math";
import {mathFromMarkdown, mathToMarkdown} from 'mdast-util-math'

import {math} from 'micromark-extension-math'
export default function remarkObsidianMath(options:any =  {} ){
    // @ts-ignore
    const data = this.data()

    add('micromarkExtensions', math())
    add('fromMarkdownExtensions', mathFromMarkdown())
    add('toMarkdownExtensions', mathToMarkdown(options))

    function add(field: string, value: any) {
        const list = /** @type {unknown[]} */ (
            data[field] ? data[field] : (data[field] = [])
        )
        list.push(value)
    }
}
