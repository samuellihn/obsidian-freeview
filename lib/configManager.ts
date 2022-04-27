import yaml from "js-yaml"
import {promises as fs} from "fs"
import fsSync from "fs"

export type Config  = {
    vaultPath: string
    exclude: string[]
}

export function getConfigSync() {
    return yaml.load(fsSync.readFileSync(process.cwd() + "/config.yaml").toString())
}
export async function getConfig(){
    let config: Config = yaml.load((await fs.readFile(process.cwd() + "/config.yaml")).toString()) as Config
    return config
}


