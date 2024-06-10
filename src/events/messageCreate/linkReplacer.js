module.exports = (message, client) => {
	const config  = require("./linkReplacerConfig.js");
    const textChannel = message.channel //get the channel from where the message is
    
	const twitterLinkRegex =  config.twitterLinkRegexEnabled ? config.twitterLinkRegex : null;
	const xLinkRegex = config.xLinkRegexEnabled ? config.xLinkRegex : null;
	const instagramLinkRegex = config.instagramLinkRegexEnabled ? config.instagramLinkRegex : null;
	const pixivLinkRegex = config.pixivLinkRegexEnabled ? config.pixivLinkRegex : null;

	const replace_map = config.replace_map;
	
	function replaceWithMap(text, map){
		//Replace every instance of the corresponding link with the replacement
		for (let key in map) {
			const regex = new RegExp(`\\b${map[key].pattern.source}\\b`, 'g');
			text = text.replace(regex, map[key].replacement)
		}
		return text;
	};
	function msgReplace(replacedText){
		textChannel.send({
			content: `${message.author}**:**  ${replacedText}`, allowedMentions: {parse: []},
			flags: [ 4096 ] // SILENT MESSAGE
		})
		message.delete()
	};
	
	const originalText = message.content
	if (message.author.bot) { //Only respond to non-bots
		return;
	}
	if (message.content.startsWith('!')){
		console.log('Aborting link changer')
		return;
	};
	//Replace links according to the defined list
	const replacedText = replaceWithMap(originalText, replace_map)
	//Detect links
	if (twitterLinkRegex && twitterLinkRegex.test(message.content)) {
		console.log('Twitter link detected');
		msgReplace(replacedText);
		
	}
	else if (xLinkRegex && xLinkRegex.test(message.content)){
		console.log('X link detected');
		msgReplace(replacedText)
		
	}
	else if (instagramLinkRegex && instagramLinkRegex.test(message.content)){
		console.log('IG link detected');
		msgReplace(replacedText)
	}
	else if (pixivLinkRegex && pixivLinkRegex.test(message.content)){
		console.log('Pixiv link detected')
		msgReplace(replacedText)
	}
};