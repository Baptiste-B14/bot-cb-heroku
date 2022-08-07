 module.exports = {
    name : "ping",
    description: "ping command",
    run:(client,message, args) => {
        
        message.channel.send('pong !');



    },
};