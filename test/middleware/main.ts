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

handler.middlewareHandler.registerMiddleware(require("./middleware").MiddlewareBefore);
handler.middlewareHandler.registerMiddleware(require("./middleware").MiddlewareAfter);
handler.commandHandler.registerCommand(require("./cmd/say").SayCommand);

client.login("1234567890");