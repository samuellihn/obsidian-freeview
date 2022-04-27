export function parseLinkBody(body) {
    // If this link doesn't have display text, it will be undefined
    let [link, displayText] = body.split("|")
    // If this link doesn't have a heading link, it will be undefined
    let [fileLink, headingLink] = link.split("#")
    // If there is no override display text, generate one
    if (!displayText) {
        displayText = fileLink
        if (headingLink) {
            displayText += " > " + headingLink
        }
    }

    return {
        file: fileLink,
        heading: headingLink,
        displayText: displayText
    }
}

export function getHref(link, getFileSlug, getHeadingSlug) {
    return link.heading ? `${getFileSlug(link.file)}#${getHeadingSlug(link.heading)}` : getFileSlug(link.file)
}
