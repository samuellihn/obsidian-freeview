import {Construct, State, Effects, Code} from "micromark-util-types"
import {factorySpace} from "micromark-factory-space";
import {markdownLineEnding} from "micromark-util-character";

const mathFlowConstruct: Construct = {name: "mathFlow", tokenize: tokenizeBlockMath, concrete: true}
export const obsidianMathFlow = {flow: {36: mathFlowConstruct}}


function tokenizeBlockMath(effects: Effects, ok: State, nok: State): State {
    return start

    // Detected the first square bracket
    function start(code: Code): State {
        effects.enter("mathFlow")
        effects.enter("mathFlowFence")
        effects.consume(code)
        return nextStart
    }

    // Look for the second square bracket
    function nextStart(code: Code): void | State {
        if (code === 36) {
            effects.consume(code)
            effects.exit("mathFlowFence")
            return begin
        } else {
            return nok(code)
        }
    }


    // Is the link empty?
    function begin(code: Code) {
        if (code === 36) {
            return exitEmpty
        } else {
            effects.enter("mathFlowValue")
            effects.enter("chunkString", {contentType: "string"})
            return inside
        }
    }

    // Link body
    function inside(code: Code): State {
        if (code === 36) {
            effects.exit("chunkString")
            effects.exit("mathFlowValue")
            return exitFull(code)
        }
        effects.consume(code)
        return inside
    }

    // First square bracket
    function exitFull(code: Code): State {
        effects.enter("mathFlowFence")
        effects.consume(code)
        return confirmExit
    }


    // Check for second square bracket for a valid link
    function confirmExit(code: Code): void | State {
        if (code === 93) {
            effects.consume(code)
            effects.exit("mathFlowFence")
            effects.exit("mathFlow")
            return ok(code)
        } else {
            effects.exit("mathFlowFence")
            effects.exit("mathFlow")
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

import katex from 'katex'

/** @type {import('katex')['default']['renderToString']} */
// @ts-expect-error: types are incorrect.
const renderToString = katex.renderToString

/**
 * Create an extension for `micromark` to support math when serializing to
 * HTML.
 *
 * > 👉 **Note**: this uses KaTeX to render math.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support math when serializing to HTML.
 */
export function mathHtml(options) {
    return {
        enter: {
            mathFlow() {
                this.lineEndingIfNeeded()
                this.tag('<div class="math math-display">')
            },
            mathText() {
                // Double?
                this.tag('<span class="math math-inline">')
                this.buffer()
            }
        },
        exit: {
            mathFlow() {
                const value = this.resume()
                this.tag(math(value.replace(/(?:\r?\n|\r)$/, ''), true))
                this.tag('</div>')
                this.setData('mathFlowOpen')
            },
            mathFlowFence() {
                // After the first fence.
                if (!this.getData('mathFlowOpen')) {
                    this.setData('mathFlowOpen', true)
                    this.buffer()
                }
            },
            mathFlowFenceMeta() {
                this.resume()
            },
            mathFlowValue(token) {
                this.raw(this.sliceSerialize(token))
            },
            mathText() {
                const value = this.resume()
                this.tag(math(value, false))
                this.tag('</span>')
            },
            mathTextData(token) {
                this.raw(this.sliceSerialize(token))
            }
        }
    }

    /**
     * @param {string} value
     *   Math text.
     * @param {boolean} displayMode
     *   Whether the math is in display mode.
     * @returns {string}
     *   HTML.
     */
    function math(value, displayMode) {
        return renderToString(value, {...options, displayMode})
    }
}
