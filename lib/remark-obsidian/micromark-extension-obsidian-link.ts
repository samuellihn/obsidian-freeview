import {slugPath, slug} from "./slugger";
import {getHref, parseLinkBody} from "./lib/obsidian-link-util";
import {Construct, State, Effects, Code} from "micromark-util-types"

const obsidianLinkConstruct: Construct = {name: "obsidianLink", tokenize: obsidianLinkTokenize}
export const obsidianLinks = {text: {91: obsidianLinkConstruct}}

function obsidianLinkTokenize(effects: Effects, ok: State, nok: State): State {
    return start

    // Detected the first square bracket
    function start(code: Code): State {
        effects.enter("obsidianLink")
        effects.enter("obsidianLinkOpen")
        effects.consume(code)
        return nextStart
    }

    // Look for the second square bracket
    function nextStart(code: Code): void | State {
        if (code === 91) {
            effects.consume(code)
            effects.exit("obsidianLinkOpen")
            return begin(code)
        } else {
            return nok(code)
        }
    }


    // Is the link empty?
    function begin(code: Code) {
        if (code === 93) {
            return exitEmpty
        } else {
            effects.enter("obsidianLinkInside")
            effects.enter("chunkString", {contentType: "string"})
            return inside
        }
    }

    // Link body
    function inside(code: Code): State {
        if (code === 93) {
            effects.exit("chunkString")
            effects.exit("obsidianLinkInside")
            return exitFull(code)
        }
        effects.consume(code)
        return inside
    }

    // First square bracket
    function exitFull(code: Code): State {
        // effects.enter("obsidianLinkMarker")
        effects.enter("obsidianLinkClose")
        effects.consume(code)
        return confirmExit
    }


    // Check for second square bracket for a valid link
    function confirmExit(code: Code): void | State {
        if (code === 93) {
            effects.consume(code)
            effects.exit("obsidianLinkClose")
            effects.exit("obsidianLink")
            return ok(code)
        } else {
            effects.exit("obsidianLinkClose")
            effects.exit("obsidianLink")
            return nok(code)
        }

    }

    // Exit if the link has no body
    function exitEmpty(code: Code): void | State {
        effects.consume(code)
        // effects.exit("obsidianLink")
        return nok(code)
    }
}


export function obsidianLinksHtml(getFileSlug = slugPath, getHeadingSlug = slug) {
    return {
        enter: {
            obsidianLink() {
                // @ts-ignore
                this.buffer()
            }
        },
        exit: {
            obsidianLink() {
                // @ts-ignore
                let linkBody = this.resume()
                let link = parseLinkBody(linkBody)
                let href = getHref(link, getFileSlug, getHeadingSlug)

                // @ts-ignore
                this.tag(`<a href="${href}">`)
                // @ts-ignore
                this.raw(this.encode(link.displayText))
                // @ts-ignore
                this.tag("</a>")
            }
        }
    }
}

