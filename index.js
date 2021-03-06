const recursive = require('fs-readdir-recursive');
const fs = require('fs')

let namespace = {_pathList: {}, _modList: {}}

function filter(name) {
    return name.slice(-3) === '.js'
}

function modFilter(name, dirname) {
    path = dirname + '/' + name
    return fs.statSync(path).isDirectory() && name.slice(0, 1) != '.'
}

function setName(name, prefix) {
    arr = name.split('/')
    namespace[prefix] = namespace[prefix] || {}
    temp = namespace[prefix]
    length = arr.length
    for (i = 0; i < length; i++) {
        if (i != length - 1) {
            temp[arr[i]] = temp[arr[i]] || {}
            temp = temp[arr[i]]
        } else {
            setLoader(temp, arr[i], name)
        }
    }
}

function setLoader(nameobj, filename, path) {
    classname = filename.slice(0, -3)
    Object.defineProperty(nameobj, classname, {get: () => require(namespace._basePath + path)})
}

function setModule(obj, name) {
    let modName = nameRule(name)
    Object.defineProperty(obj, modName, {get: () => require(name)})
}

function nameRule(name) {
    return name.replace(/[._\-]+(.)/g, s => s.charAt(s.length - 1).toUpperCase())
}

const autoloader = {
    registerApps(dirname, appName) {
        paths = recursive(dirname)
        namespace._basePath = dirname + '/'
        mods = paths.filter(filter);
        mods.forEach(e => setName(e, appName))
        global[appName] = namespace[appName];
    },

    registerModules(dirname, modName) {
        mods = fs.readdirSync(dirname).filter(e => modFilter(e, dirname))
        namespace[modName] = namespace[modName] || {}
        mods.forEach(e => setModule(namespace[modName], e))
        global[modName] = namespace[modName]
    }
}

module.exports = autoloader
