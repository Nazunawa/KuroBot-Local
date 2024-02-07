module.exports = (message, client) => {
    const textChannel = message.channel //get the channel from where the message is
    // Define a regular expression to match the Twitter link pattern
	const twitterLinkRegex = /(?<!<)https:\/\/twitter\.com\/\w+\/status\/\d+(?![\w>])/g; //define a twt link with no embed
	const xLinkRegex = /(?<!<)https:\/\/x\.com\/\w+\/status\/\d+(?![\w>])/g; //define an X link with no embed
	// const noEmbed = /^<.+>$/; //define a link with no embed
	// const normalTwitterLink = /https:\/\/twitter\.com/g;
	// const normalXLink = /https:\/\/x\.com/g;

	const replace_map = {
		twitter: {
			pattern: /https:\/\/twitter\.com/,
			replacement: 'https://vxtwitter.com'
		},
		x: {
			pattern: /https:\/\/x\.com/,
			replacement: 'https://fixvx.com'
		},
	};
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
			content: `${message.author}**:**  ${replacedText}`, allowedMentions: {parse: []}
		})
		message.delete()
	};
	
	const originalText = message.content
	if (message.content.startsWith('!')){
		console.log('Aborting link changer')
		return;
	};
	//Replace links according to the defined list
	const replacedText = replaceWithMap(originalText, replace_map)
	//Detect twitter links
	if (twitterLinkRegex.test(message.content)) {
		console.log('Twitter link detected');
		msgReplace(replacedText);
		
	}
	else if (xLinkRegex.test(message.content)){
		console.log('X link detected');
		msgReplace(replacedText)
		
	};
};


