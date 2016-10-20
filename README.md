# ns-autoloader
The autoloader for javascript ( nodejs )

# Outline

## installation

You can install ns-autoloader with following command:

```
npm install ns-autoloader
```

## Usage

At the entry point, create ns-autoloader module and register apps or node modules.
After the resitering, you can use registered apps or modules through the global object.

```
const autoload = require('ns-autoloader')

autoload.registerApps(__dirname + '/app', 'yourApp')
autoload.registerModules(__dirname + '/node_modules', 'mod')

const Rain = yourApp.weather.Rain
obj = new Rain()
```
