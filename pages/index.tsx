import {promises as fs} from "fs"
import fsSync from "fs"
import path from "path";

import styles from "../styles/Index.module.sass"

import {Component} from "react";
import {embedProcessor} from "../lib/processors";
import {FileMap} from "../lib/slugger";
import {Processor, unified} from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import remarkObsidianLink from "../lib/remark-obsidian/remark-obsidian-link";
import remarkObsidianEmbed from "../lib/remark-obsidian/remark-obsidian-embed";
import remarkRehype from "remark-rehype";
import {obsidianLinkToHast} from "../lib/remark-obsidian/mdast-util-obsidian-link";
import {obsidianEmbedToHast} from "../lib/remark-obsidian/mdast-util-obsidian-embed";
import {getEmbeddedSyntaxTree} from "../lib/embedHandler";
import rehypeMathjax from "rehype-mathjax";
import rehypeStringify from "rehype-stringify";

async function getFileMap() {
    let fileMapText = (await fs.readFile(path.join(process.cwd(), "state", "slugs.json"))).toString(),
        fileMap: FileMap = JSON.parse(fileMapText);
    return fileMap
}

export async function getStaticProps() {
    let fileMap: FileMap = await getFileMap()

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

    let indexPath: string = path.join(process.cwd(), "state", "_freeview", "index.md")
    let mdContent: string | null
    if (fsSync.existsSync(indexPath)) {
        let mdFile = await fs.readFile(indexPath)
        mdContent = String(await mdProcessor.process(mdFile))
    } else {
        mdContent = null
    }

    return {
        props: {
            mdContent, fileMap
        }
    }
}

type NoteProps = {
    props: {
        mdContent: string | null
        fileMap: FileMap
    }
}

class Note extends Component<{ mdContent: string, fileMap: FileMap }> {
    render() {
        let {mdContent, fileMap} = this.props;
        return (
            <div className={styles["content"]}>
                    <div className={styles["content-inner"]}>
                        <h1>Samuel Lihn - Note Repository</h1>
                        <div dangerouslySetInnerHTML={{__html: mdContent}} className={styles["markdown"]}>
                        </div>
                        <h2>All Notes:</h2>
                        <div className={styles["markdown"]}>
                            {
                                Object.entries(fileMap.slugs).map(([name, href]) =>
                                    <div key={href}>
                                        <a href={href}>{name}</a>
                                    </div>
                                )
                            }

                        </div>
                    </div>
            </div>
        )
    }
}

export default Note
