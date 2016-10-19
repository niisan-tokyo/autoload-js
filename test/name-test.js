const assert = require("assert");

const loader = require("../index.js");

describe ("using autoloader and namespace structure is put into global object", () => {
    it ("Before autoload, you cannot access dir1/file1", () => {
        assert.equal("undefined", typeof app)
    })

    it ("set namespace", () => {
        loader.registerApps(__dirname + "/class_for_test", 'app')
        const file1 = app.dir1.file1;
        const obj = new file1()
        assert.equal("Hello Freddy!!", obj.sayHello())

        const file2 = app.dir1.dir2.file2
        assert.equal("Good Bye!!", file2())
    })

    it ("set modules", () => {
        loader.registerModules(__dirname + "/../node_modules", "mod")
        assert(typeof mod.mocha != 'undefined')
        assert.equal("alMenDora", loader.nameRule("al_men._-dora"))
    })
})
