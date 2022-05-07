import {Construct, State, Effects, Code} from "micromark-util-types"

const mathFlowConstruct: Construct = {name: "mathFlow", tokenize: tokenizeBlockMath, concrete: true}
export const obsidianMathFlow = {flow: {36: mathFlowConstruct}}

function tokenizeBlockMath(effects: Effects, ok: State, nok: State): State {
    return start

    function start(code: Code): State {
        effects.enter("mathFlow")
        effects.enter("mathFlowFence")
        effects.consume(code)
        return nextStart
    }


    // Look for the second dollar sign
    function nextStart(code: Code): void | State {
        if (code === 36) {
            effects.consume(code)
            effects.exit("mathFlowFence")
            return begin(code)
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

    // Body
    function inside(code: Code): State {
        if (code === 36) {
            effects.exit("chunkString")
            effects.exit("mathFlowValue")
            return exitFull(code)
        }
        effects.consume(code)
        return inside

    }

    // First dollar sign
    function exitFull(code: Code): State {
        // effects.enter("obsidianLinkMarker")
        effects.enter("mathFlowFence")
        effects.consume(code)
        return confirmExit
    }

    // Check for second dollar sign
    function confirmExit(code: Code): void | State {
        if (code === 36) {
            effects.consume(code)
            effects.enter("mathFlowFence")
            effects.enter("mathFlow")
            return ok(code)
        } else {
            effects.exit("mathFlowFence")
            effects.exit("mathFlow")
            return nok(code)
        }

    }

    function exitEmpty(code: Code): void | State {
        effects.consume(code)
        effects.exit("mathFlow")
        return nok(code)
    }
}
