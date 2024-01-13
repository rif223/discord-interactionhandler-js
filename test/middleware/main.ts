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
} from "../../src/index";

const handler = new Handler(client);

handler.middlewareHandler.registerMiddleware((await import("./middleware")).MiddlewareBefore);
handler.middlewareHandler.registerMiddleware((await import("./middleware")).MiddlewareAfter);
handler.commandHandler.registerCommand((await import("./cmd/say")).SayCommand);

client.login("1234567890");