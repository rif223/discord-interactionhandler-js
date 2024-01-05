import { CommandContext, SlashCommand } from "../../../src";

export class SayCommand extends SlashCommand {
    get name() {
        return "say";
    }

    get description() {
        return "This is a say command!!!"
    }

    get options() {
        return [
            {
                type: 3,
                name: "string",
                description: "This is a string!",
                required: true
            }
        ];
    }

    get version() {
        return "2.0.0";
    }

    async run(ctx: CommandContext) {

        let string = ctx.options.getString("string");
        ctx.interaction.reply({ content: string || undefined, fetchReply: true });

    }

}