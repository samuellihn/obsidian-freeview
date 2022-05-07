import {Processor} from "unified";
import fs from "fs"
import {FileMap} from "./slugger";
import path from "path";
import {toHast} from 'mdast-util-to-hast'
import {obsidianLinkToHast} from "./remark-obsidian/mdast-util-obsidian-link";
import {obsidianEmbedToHast} from "./remark-obsidian/mdast-util-obsidian-embed";
import {MdastNode} from "mdast-util-to-hast/lib";
import util from "util";
import {h} from "hastscript"

export function getEmbeddedSyntaxTree(fileMap: FileMap, processor: Processor, embedClassName = "obsidian-embed") {
    return function (noteName: string) {
        if (fileMap.slugs.hasOwnProperty(noteName)) {
            let fileHandle = fs.readFileSync(path.join(process.cwd(), "public", noteName + ".md"))

            let mdTree = processor.parse(fileHandle)
            let hast = toHast(<MdastNode>mdTree, {
                handlers: {
                    obsidianLink: obsidianLinkToHast(),
                    obsidianEmbed: obsidianEmbedToHast({getEmbeddedSyntaxTree: () => ""})
                }
            })
            let newRoot = h("div", {class: embedClassName})
            // @ts-ignore
            hast = {...newRoot, ...hast, type: "element"}
            return hast
        }
        return ""

    }

}