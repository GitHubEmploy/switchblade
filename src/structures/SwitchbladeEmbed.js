const { RichEmbed } = require('discord.js')

/**
 * A RichEmbed with the default fields already filled
 * @constructor
 * @param {User} [user] - The user that executed the command that resulted in this embed
 * @param {object} [data] - Data to set in the rich embed
 */
module.exports = class SwitchbladeEmbed extends RichEmbed {
  constructor (user, data = {}) {
    super(data)
    this.setColor(process.env.EMBED_COLOR).setTimestamp()
    if (user) this.setFooter(user.tag)
  }

  /**
   * Sets the description of this embed based on an array of arrays of strings
   * @param {Array<Array>} Array containing arrays (blocks) of and strings
   * @returns {SwitchbladeEmbed}
   */
  setDescriptionFromBlockArray (blocks) {
    blocks = blocks
      .map(
        blockLines => blockLines.filter(
          line => line != null
        )
      ).filter(
        blockLines => blockLines.length > 0 && blockLines != null
      ).map(
        blockLines => blockLines.join('\n')
      ).join('\n\n')
    this.description = blocks
    return this
  }
}
