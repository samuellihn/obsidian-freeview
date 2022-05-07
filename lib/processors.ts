import {Processor, unified} from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import remarkObsidianLink from "./remark-obsidian/remark-obsidian-link";
import remarkObsidianEmbed from "./remark-obsidian/remark-obsidian-embed";
import remarkRehype from "remark-rehype";
import {obsidianLinkToHast} from "./remark-obsidian/mdast-util-obsidian-link";
import {obsidianEmbedToHast} from "./remark-obsidian/mdast-util-obsidian-embed";
import {getEmbeddedSyntaxTree} from "./embedHandler";
import styles from "../styles/Note.module.sass";
import rehypeMathjax from "rehype-mathjax";
import rehypeStringify from "rehype-stringify";

export let embedProcessor: Processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkBreaks)
    .use(remarkObsidianLink)
    .use(remarkObsidianEmbed)

