export function determineEmbedType(linkBody) {

    // Images
    if (/.(jpg|jpeg|png|gif)(\|(\d+)x(\d+))?$/.test(linkBody)) {
        return "image"
    }
    // File Embeds, without file extension
    else if (!(/\.(.+)/.test(linkBody))) {
        return "fileEmbed"
    }

}

