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

client.login(process.env.TOKEN);