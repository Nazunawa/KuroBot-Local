module.exports  = (message, client) => {
    //USE ONLY FOR TESTING PURPOSES!
    if (message.author.bot) { //Only respond to non-bots
		return;
	}
    // console.log(message);
	// console.log(message.author.username, ": ", message.content); //TODO: COMMENT THIS EVERYTIME PUSH TO GITHUB
};