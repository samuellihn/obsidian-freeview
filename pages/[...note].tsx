import {FileMap} from "../lib/slugger";

import util from "util"

import {promises as fs} from "fs"
import path from "path";

import {Processor, unified} from 'unified'

import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkMath from "remark-math"
import remarkBreaks from "remark-breaks"

import rehypeMathjax from "rehype-mathjax"
import rehypeStringify from 'rehype-stringify'

import styles from "../styles/Note.module.sass"

import remarkObsidianLink from "../lib/remark-obsidian/remark-obsidian-link"
import {obsidianLinkToHast} from "../lib/remark-obsidian/mdast-util-obsidian-link";
import remarkObsidianEmbed from "../lib/remark-obsidian/remark-obsidian-embed"
import {obsidianEmbedToHast} from "../lib/remark-obsidian/mdast-util-obsidian-embed";
import {getEmbeddedSyntaxTree} from "../lib/embedHandler";

import {Component} from "react";

async function getFileMap() {
    let fileMapText = (await fs.readFile(path.join(process.cwd(), "state", "slugs.json"))).toString()
    let fileMap: FileMap = JSON.parse(fileMapText)
    return fileMap
}

export async function getStaticPaths() {
    let fileMap = await getFileMap()
    const paths = []

    for (const [_, slug] of Object.entries(fileMap.slugs)) {
        paths.push({params: {note: slug.split("/")}})
    }

    return {paths: paths, fallback: true}
}

export async function getStaticProps({params}: { params: { note: string[] } }) {
    // console.log(params.note)
    let fileMap: FileMap = await getFileMap()
    let filename = fileMap.fileNames[params.note.join("/")]

    // console.log(filename)
    let mdFilePath: string = path.join(process.cwd(), "public", filename + ".md")

    let mdFile = await fs.readFile(mdFilePath)

    let embedProcessor: Processor = unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkBreaks)
        .use(remarkObsidianLink)
        .use(remarkObsidianEmbed)

    let mdProcessor: Processor = unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkBreaks)
        .use(remarkObsidianLink)
        .use(remarkObsidianEmbed)
        .use(remarkRehype, {
            handlers: {
                obsidianLink: obsidianLinkToHast(),
                obsidianEmbed: obsidianEmbedToHast({
                    getEmbeddedSyntaxTree: (getEmbeddedSyntaxTree(fileMap, embedProcessor, styles["obsidian-embed"]))
                })
            }
        })
        .use(rehypeMathjax)
        .use(rehypeStringify)

    let md = await mdProcessor.process(mdFile)
    let mdContent: string = String(md)
    let pageTitle = filename.split("/").pop()


    return {
        props: {
            mdContent, pageTitle
        }
    }
}

type NoteProps = {
    props: {
        mdContent: string, pageTitle: string
    }
}

class Note extends Component<{ mdContent: any, pageTitle: any }> {
    render() {
        let {mdContent, pageTitle} = this.props;
        return (
            <div className={styles["content"]}>
                <div className={styles["content-inner"]}>
                    <h1>{pageTitle}</h1>
                    <div dangerouslySetInnerHTML={{__html: mdContent}} className={styles["markdown"]}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note