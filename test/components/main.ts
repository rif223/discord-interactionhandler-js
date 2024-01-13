import {
    Client,
    GatewayIntentBits,
    Partials
} from "discord.js";

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel, Partials.Message]
});

import {
    Handler
} from "../../src";

const handler = new Handler(client);

handler.commandHandler.registerCommand((await import("./cmd/faq")).FaqCommand);

client.login("1234567890");