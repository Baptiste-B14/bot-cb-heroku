const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: 513 });
client.commands = new Collection();

['CommandUtil', 'EventUtil'].forEach(handler => {  require(`./utils/handlers/${handler}`)(client) });
 

const prefix = '*';
 









client.on('message', message=>{
    if(!message.content.startsWith(prefix)|| message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if(command ==='dice6'){
        client.commands.get('dice6').execute(message, args);
    }
});


process.on('exit', code => { console.log(`Le processus s'est arrêté avec le code ${code}!`)});

process.on('uncaughtException', (err, origin) => { console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origine: ${origin}`)});

process.on('unhandleRejection', (reason, promise) => { console.log(`UNHANDLE_REJECTION: ${reason}\n-----\n`, promise) });

process.on('warning', (...args) => console.log(...args));



client.login(process.env.TOKEN);
