const commands = require('../../commands'); //non-slash commands
const botOwnerID = process.env.botOwnerID;
module.exports = (message, client) => {
    //Only continue if the message isn't from a bot
	if (message.author.bot) { //Only respond to non-bots
		return;
	}

	const textChannel = message.channel //get the channel from where the message is
	//console.log(message.content);
	console.log(message.author.username, ": ", message.content);

	if (message.content.startsWith('k-')) { //use a prefix, "k,"
		const args = message.content.slice(2).trim().split(/ +/);
		const userCommand = args.shift().toLocaleLowerCase();
		if (userCommand === 'ping') {
			commands.pingCommand(message);
		} else if (userCommand === 'shutdown' || userCommand === 'off') {
			commands.shutdownCommand(message, botOwnerID);
		}
	}
    
	
    
};