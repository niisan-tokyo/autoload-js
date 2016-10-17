const rec = require('../index.js');

rec(__dirname, 'app');

const file1 = new app.dir1.file1()
file1.sayHello()

const file2 = app.dir1.dir2.file2
file2()

console.log(app)
