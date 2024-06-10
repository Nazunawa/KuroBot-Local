module.exports = {
    //toggle link replacement
    twitterLinkRegexEnabled: true,
    xLinkRegexEnabled: true,
    instagramLinkRegexEnabled: true,
    pixivLinkRegexEnabled: true,
	
    // link replacement detection regex
    twitterLinkRegex: /(?<!<)https:\/\/twitter\.com\/\w+\/status\/\d+(?![\w>])/g,
    xLinkRegex: /(?<!<)https:\/\/x\.com\/\w+\/status\/\d+(?![\w>])/g,
    instagramLinkRegex: /(?<!<)https:\/\/www\.instagram\.com\/(reel|p)\/[A-Za-z0-9_-]+\/(?![>\s])/g,
    pixivLinkRegex: /(?<!<)https:\/\/www\.pixiv\.net(?:\/en)?\/artworks\/\d+(?![>])/g,

    //Link Replace regex
    replace_map: {
        twitter: {
	        pattern: /https:\/\/twitter\.com/,
			replacement: 'https://vxtwitter.com'
        },
        x: {
            pattern: /https:\/\/x\.com/,
            replacement: 'https://fixvx.com'
        },
        instagram: {
            pattern: /https:\/\/www\.instagram\.com/,
            replacement: 'https://www.ddinstagram.com'
        },
        pixiv: {
            pattern: /https:\/\/www\.pixiv\.net(?:\/en)?\/artworks/,
            replacement: 'https://www.phixiv.net/en/artworks'
        }
    }
}