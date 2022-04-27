import {slugPath, slug} from "./slugger.js";
import {getHref, parseLinkBody} from "./lib/obsidian-link-util.js";

const obsidianLinkConstruct = {name: "obsidianLink", tokenize: obsidianLinkTokenize}
export const obsidianLinks = {text: {91: obsidianLinkConstruct}}

function obsidianLinkTokenize(effects, ok, nok) {
    return start

    // Detected the first square bracket
    function start(code) {
        effects.enter("obsidianLink")
        effects.enter("obsidianLinkOpen")
        effects.consume(code)
        return nextStart
    }

    // Look for the second square bracket
    function nextStart(code) {
        if (code === 91) {
            effects.consume(code)
            effects.exit("obsidianLinkOpen")
            return begin(code)
        } else {
            return nok(code)
        }
    }


    // Is the link empty?
    function begin(code) {
        if (code === 93) {
            return exitEmpty
        } else {
            effects.enter("obsidianLinkInside")
            effects.enter("chunkString", {contentType: "string"})
            return inside
        }
    }

    // Link body
    function inside(code) {
        if (code === 93) {
            effects.exit("chunkString")
            effects.exit("obsidianLinkInside")
            return exitFull(code)
        }
        effects.consume(code)
        return inside

    }

    // First square bracket
    function exitFull(code) {
        // effects.enter("obsidianLinkMarker")
        effects.enter("obsidianLinkClose")
        effects.consume(code)
        return confirmExit
    }


    // Check for second square bracket for a valid link
    function confirmExit(code) {
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
    function exitEmpty(code) {
        effects.consume(code)
        // effects.exit("obsidianLink")
        return nok(code)
    }
}


export function obsidianLinksHtml(getFileSlug = slugPath, getHeadingSlug = slug) {
    return {
        enter: {
            obsidianLink() {
                this.buffer()
            }
        },
        exit: {
            obsidianLink() {
                let linkBody = this.resume()
                let link = parseLinkBody(linkBody)
                let href = getHref(link, getFileSlug, getHeadingSlug)

                this.tag(`<a href="${href}">`)
                this.raw(this.encode(link.displayText))
                this.tag("</a>")
            }
        }
    }
}

