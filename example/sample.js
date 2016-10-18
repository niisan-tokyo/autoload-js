const rec = require('../index.js');

rec.registerApps(__dirname, 'app');
rec.registerModules(__dirname + '/../node_modules', 'mod')

const file1 = new app.dir1.file1()
file1.sayHello()

const file2 = app.dir1.dir2.file2
file2()

const str = rec.nameRule('fs-readdir.-names')
console.log(str)

console.log(mod)
const readdir = mod['fs-readdir-recursive']
console.log(readdir('dir1'))

console.log(app)
