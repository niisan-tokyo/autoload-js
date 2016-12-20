const rec = require('../index.js');

rec.registerApps(__dirname, 'app');
rec.registerModules(__dirname + '/../node_modules', 'mod')

const file1 = new app.dir1.file1()
file1.sayHello()

const file2 = app.dir1.dir2.file2
file2()

console.log(mod)
const readdir = mod.fsReaddirRecursive
console.log(mod)
console.log(readdir(__dirname + '/dir1'))

console.log(app)
