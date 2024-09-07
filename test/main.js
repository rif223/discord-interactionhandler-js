import { Client, GatewayIntentBits } from 'discord.js';
import { Handler, SlashCommand } from "../lib/index.js"
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const handler = new Handler(client);

export class TestCommand extends SlashCommand {
    get name() {
        return "test";
    }

    get description() {
        return "This is a test command!"
    }

    get options() {
        return [];
    }

    get version() {
        return "1.0.0";
    }

    async run(ctx) {
        console.log(ctx);
    }

}

handler.commandHandler.registerCommand(TestCommand);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login("1234567890");