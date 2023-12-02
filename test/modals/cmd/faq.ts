import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { CommandContext, ModalContext, SlashCommand } from "../../../src";

export class FaqCommand extends SlashCommand {
    get name() {
        return "faq";
    }

    get description() {
        return "This is a faq command!!!"
    }

    get version() {
        return "2.0.0";
    }

    async run(ctx: CommandContext) {

        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('My Modal');

        const favoriteColorInput = new TextInputBuilder()
            .setCustomId('favoriteColorInput')
            .setLabel("What's your favorite color?")
            .setStyle(TextInputStyle.Short);

        const hobbiesInput = new TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setLabel("What's some of your favorite hobbies?")
            .setStyle(TextInputStyle.Paragraph);

        const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(favoriteColorInput);
        const secondActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(hobbiesInput);

        modal.addComponents(firstActionRow, secondActionRow);

        let m = await ctx.addModalEvent(modal, (ctx: ModalContext) => {
            ctx.interaction.reply(ctx.interaction.fields.getTextInputValue("hobbiesInput"));
        });

        ctx.interaction.showModal(m);

    }

}