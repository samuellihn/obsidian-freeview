import fs from "fs"
import glob from "glob"
import path from "path";
import {Config, getConfigSync} from "../lib/configManager";
import createSlug from "../lib/slugger"
import {any} from "prop-types";

if (process.argv.includes("--clean")) {
    fs.rmSync(path.join(process.cwd(), "public"), {recursive: true})

}

const destDir = path.join(process.cwd(), "public")
if (fs.existsSync(path.join(process.cwd(), "state", "slugs.json"))) {
    fs.rmSync(path.join(process.cwd(), "state", "slugs.json"))
}


const config: Config = getConfigSync() as Config
const globOptions = {
    cwd: config.vaultPath
}

let excludePattern = ""
if (config.exclude) {
    for (const item of config.exclude) {
        if (item) {
            excludePattern += `(${item.toString()})|`
        }
    }
    excludePattern = excludePattern.substring(0, excludePattern.length - 1)
}
let globRes = glob.sync("**", globOptions)

// Create all directories

let directories = globRes
    .filter((elem) => elem.split(".").length < 2)
    .map((elem) => elem + "/")
    .filter((elem) => !elem.match(excludePattern))

for (const d of directories) {
    let p = path.join(destDir, d)
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p, {recursive: true})
    }
}


// Copy files
let files = globRes
    .filter((elem) => elem.split(".").length > 1)
    .filter((elem) => !elem.match(excludePattern))

for (const f of files) {
    let p = path.join(destDir, f)
    fs.copyFileSync(path.join(config.vaultPath, f), p)
}

// Slug md files

type FileMap = {
    slugs: any
    fileNames: any
}
const fileMap: FileMap = {slugs: {}, fileNames: {}}

let markdownFiles = files.filter((f) => f.endsWith(".md")).map((f) => f.substring(0, f.length - 3))
let md: string;
for (md of markdownFiles) {
    let slug: string = md.split("/").map((part) => createSlug(part)).join("/")
    fileMap.slugs[md] = slug
    fileMap.fileNames[slug] = md
}

for (const s of fs.readdirSync(path.join(process.cwd(), "staticFiles"))) {
    fs.copyFileSync(path.join(process.cwd(), "staticFiles", s), path.join(process.cwd(), "public", s))
}

fs.writeFileSync(path.join(process.cwd(), "state", "slugs.json"), JSON.stringify(fileMap, null, 2), 'utf-8')