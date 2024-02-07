const { ActivityType } = require('discord.js');
module.exports = (c, client) => {
    console.log(`${c.user.username} is online`);
    let status = [
        {
            name: 'over Illya',
            type: ActivityType.Watching,
        },
        {
            name: 'with Illya',
            type: ActivityType.Playing,
        },
    ];
	let random = Math.floor(Math.random() * status.length);
	client.user.setActivity(status[random])
    console.log("Status set")
	setInterval(() => {
		client.user.setActivity(status[random])
        //console.log("Status updated");
	}, 180000);
};