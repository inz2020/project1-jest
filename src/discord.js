/**
 * 
 * @param {medule:discord.js/message} message 
 * @returns 
 */

export async function ping(message) {
    message.delete().catch(console.error)

    return message.author.createDM()
        .then(c => c.send('pong'))
        .catch(() => message.reply('pong'))

}