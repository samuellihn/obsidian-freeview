export type EmbedType = "image" | "fileEmbed" | undefined

export function determineEmbedType(linkBody: string): EmbedType {

    // Images
    if (/.(jpg|jpeg|png|gif)(\|(\d+)x(\d+))?$/.test(linkBody)) {
        return "image"
    }
    // File Embeds, without file extension
    else if (!(/\.(.+)/.test(linkBody))) {
        return "fileEmbed"
    }

}

