# KuroBot
A discord bot for personal use. For a replit version, go to the [replit git page](https://github.com/Nazunawa/KuroBot)

This branch is only for those who want to host it out of replit (In replit, it uses a monitor ping as KeepAlive). If you want to use the KeepAlive method, simply copy part of the code that runs it (in server.js and the beginning and end of index.js)

## Table of content
1. [Current Features](#current-features)
2. [Dependencies](#dependencies)
3. [Hosting it](#hosting-it)
## Current Features
- Replacing twitter links with vxtwitter (can be configured to other links)
    - Vx-ivy slash command (instead of deleting your message)
- Custom message replies

## Dependencies
- [discord.js](https://discord.js.org/)
- [commandkit](https://commandkit.js.org/)
- [dotenv](https://www.dotenv.org/)


## Hosting it
1. Download it (git clone, download zip, whichever)
2. Install dependencies
    - Run ```npm i```
    - Optional: nodemon ```npm i nodemon```
3. Set up global variables
    - Follow  the example in `.env.example` and rename it as `.env`, then fill out all fields.
    - botOwnerID is optional, just delete shutdown command from `commands.js` and other  related parts if you don't want that feature.
4. Run `nodemon` / `node src/index.js` to start the bot