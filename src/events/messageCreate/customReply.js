//custom message reacts
module.exports = (message, client) => {
    
	if (message.content === 'loli') {
		message.reply({
			content: 'Uoh :sob:', allowedMentions: {
				repliedUser: false
			}
		});
	}
};