# autoload-js
The autoloader for javascript ( nodejs )

# Usage

```
const autoload = require('./index.js')

autoload.registerApps(__dirname + '/app', app)
autoload.registerModules(__dirname + '/node_modules', mod)

const Rain = app.weather.Rain
obj = new Rain()
```
