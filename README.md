# discord-interactionhandler-js

This is a interaction handler for discord.js!

## Installation

Use the package manager [npm](https://docs.npmjs.com/about-npm) to install [discord-interactionhandler-js](https://www.npmjs.com/package/discord-interactionhandler-js).

```bash
npm install discord-interactionhandler-js
```

## Documentation

### [`Classes`]()

[`Handler`]()

**Methods**
- readyHandler
- interactionCreateHandler

**Properties**
- client
- commandHandler
- componentHandler
- middlewareHandler
- modalhandler
- guildId
- guildOnlyError


[`CommandHandler`]()

**Methods**
- registerCommand
- registerCommands
- registerCommandsIn
- defaultGuildOnlyError
- handle

**Properties**
- mhandler
- cmds


[`MiddlewareHandler`]()

**Methods**
- registerMiddleware
- registerMiddlewares
- registerMiddlewaresIn

**Properties**
- mhandler
- middlewaresBefore
- middlewaresAfter


[`ComponentHandler`]()

**Methods**
- addComponentEvent
- load
- handle

**Properties**
- mhandler
- comps


[`ModalHandler`]()

**Methods**
- addModalEvent
- handle

**Properties**
- mhandler
- modals

### [`Interfaces`]()
- SlashCommand
- MessageCommand
- UserCommand
- MiddlewareBeforeInterface
- MiddlewareAfterInterface
- ComponentInterface
- ModalInterface
######
- CommandContext
- ComponentContext
- ModalContext

## License

[MIT](https://choosealicense.com/licenses/mit/)