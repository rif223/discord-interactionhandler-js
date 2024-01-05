import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { CommandContext, ComponentContext, ModalContext, SlashCommand } from "../../../src";

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

        let raw = new ActionRowBuilder<ButtonBuilder>().addComponents([
            await ctx.addComponentEvent(
                new ButtonBuilder().setCustomId("green").setLabel("Green").setStyle(ButtonStyle.Primary),
                (ctx: ComponentContext) => {
                    ctx.interaction.update({ content: "Green" });
                }),
            await ctx.addComponentEvent(
                new ButtonBuilder().setCustomId("red").setLabel("Red").setStyle(ButtonStyle.Primary),
                (ctx: ComponentContext) => {
                    ctx.interaction.update({ content: "Red" });
                })
        ])

        let string = ctx.options.getString("string");
        ctx.interaction.reply({ content: string || undefined, components: [raw], fetchReply: true });

    }

}