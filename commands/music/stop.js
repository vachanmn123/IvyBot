module.exports = {
	name: "stop",
    description: "Stop the playing song",
    usage: "stop",
    guildOnly: true,
	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
        const queue = message.client.distube.getQueue(message);
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`);
        queue.stop();
        message.channel.send(`Stopped!`);
	},
};