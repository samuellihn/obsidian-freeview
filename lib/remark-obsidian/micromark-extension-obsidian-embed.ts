import {slugPath, slug} from "./slugger.js";
import {getHref, parseLinkBody} from "./lib/obsidian-link-util.js";
import {determineEmbedType} from "./lib/obsidian-embed-util.js";

const obsidianEmbedConstruct = {name: "obsidianEmbed", tokenize: obsidianEmbedTokenize}
export const obsidianEmbed = {text: {33: obsidianEmbedConstruct}}

function obsidianEmbedTokenize(effects, ok, nok) {
    return start

    // Detected the first exclamation mark
    function start(code) {
        effects.enter("obsidianEmbed")
        effects.enter("obsidianEmbedOpen")
        effects.consume(code)
        return nextStart(0)
    }

    // Look for two square brackets
    function nextStart(brackets = 0) {
        return function (code) {
            if (code === 91) {
                if (brackets === 1) {
                    effects.consume(code)
                    effects.exit("obsidianEmbedOpen")
                    return begin(code)
                } else {
                    effects.consume(code)
                    return nextStart(1)
                }
            } else {
                return nok(code)
            }
        }
    }


    // Is the link empty?
    function begin(code) {
        if (code === 93) {
            return exitEmpty
        } else {
            effects.enter("obsidianEmbedInside")
            effects.enter("chunkString", {contentType: "string"})
            return inside
        }
    }

    // Link body
    function inside(code) {
        if (code === 93) {
            effects.exit("chunkString")
            effects.exit("obsidianEmbedInside")
            return exitFull(code)
        }
        effects.consume(code)
        return inside

    }

    // First square bracket
    function exitFull(code) {
        effects.enter("obsidianEmbedClose")
        effects.consume(code)
        return confirmExit
    }


    // Check for second square bracket for a valid link
    function confirmExit(code) {
        if (code === 93) {
            effects.consume(code)
            effects.exit("obsidianEmbedClose")
            effects.exit("obsidianEmbed")
            return ok(code)
        } else {
            effects.exit("obsidianEmbedClose")
            effects.exit("obsidianEmbed")
            return nok(code)
        }

    }

    // Exit if the link has no body
    function exitEmpty(code) {
        effects.consume(code)
        return nok(code)
    }
}


export function obsidianEmbedHtml(getEmbeddedHtml, getImageUri = encodeURI, handlers = defaultEmbedHandlers(getEmbeddedHtml, getImageUri()),) {
    return {
        enter: {
            obsidianEmbed() {
                this.buffer()
            }
        },
        exit: {
            obsidianEmbed: function () {
                let linkBody = this.resume()
                let type = determineEmbedType(linkBody)
                handlers[type](this)
            }
        }
    }
}

function defaultEmbedHandlers(getEmbeddedHtml, getImageUri) {
    return {
        image(ref, body) {
            let [imageHref, dimensions] = body.split("|")
            let imageUri = getImageUri(imageHref)
            if (dimensions) {
                let [width, height] = dimensions.split("x")
                ref.tag(`<img src="${imageUri}" alt="${imageHref}" style="width: ${width}px; height: ${height}px">`)
            } else {
                ref.tag(`<img src="${imageUri}" alt="${imageHref}">`)
            }
            ref.tag(`</img>`)
        }
        ,
        fileEmbed(ref, body) {
            ref.tag(`<div class="obsidianEmbed">`)
            ref.raw(getEmbeddedHtml(body))
            ref.tag(`</div>`)
        }
    }
}
