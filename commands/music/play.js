module.exports = {
	name: "play",
    description: "Play a song",
    usage: "play <song name>",
    guildOnly: true,
    category: "music",

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Vachan MN
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	async execute(message, args) {
        const distube = message.client.distube
        searchString = args.join(' ');
        if (!message.member.voice.channel) return message.reply('YOU ARENT IN A VC!')
        if (!searchString) return message.reply('Please enter the search string or url')
        try {
					  message.channel.sendTyping();
            distube.play(message, args.join(' '));
        } catch (e) {
            return message.reply(e)
        }
	},
};
