const recursive = require('fs-readdir-recursive');

let namespace = {_pathList: {}}

function filter(name) {
    return name.slice(-3) === '.js'
}

function setName(name) {
    arr = name.split('/')
    temp = namespace
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
    Object.defineProperty(nameobj, classname, {get: () => {
        if (typeof namespace._pathList[path] == 'undefined') {
            namespace._pathList[path] = require(namespace._basePath + path)
        }

        return namespace._pathList[path]
    }})
}

const autoloader = (dirname, appName) => {
    paths = recursive(dirname)
    namespace._basePath = dirname + '/'
    mods = paths.filter(filter);
    mods.forEach(setName)
    global[appName] = namespace;
}

module.exports = autoloader
