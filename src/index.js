require('dotenv').config();
const { Client, IntentsBitField, TextChannel , ActivityType} = require('discord.js');
const { CommandKit } = require('commandkit');
const path = require('path');
const botOwnerID = process.env.botOwnerID;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

//event handler
new CommandKit({
	client,
	devGuildIds: ['794060346167132221'],
	devUserIds: [botOwnerID],//delete along with shutdown at commands.js
	eventsPath: `${__dirname}/events`,
	commandsPath: path.join(__dirname, 'slashCommands'),
    bulkRegister: true, //change this to comment if command registration troubles

});

let delay = 0; // Initial delay in seconds
function reconnectWithDelay(delay) {
    setTimeout(() => {
        console.log('Attempting to reconnect...');
        client.login(process.env.TOKEN); // Attempt to reconnect

    }, delay * 1000); // Convert seconds to milliseconds
}

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    
    if ((err.code === 'ENOTFOUND' && err.hostname === 'discord.com')|| err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT' || err.code === 'ECONNREFUSED') {
        delay += 5;
        console.log(`Reconnecting in ${delay} seconds...`);
        reconnectWithDelay(delay);
    } else {
        // console.error('Unhandled error:', err);
        delay = 5;
    }
});

client.login(process.env.TOKEN);