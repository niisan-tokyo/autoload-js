const recursive = require('recursive-readdir');

const autoloader = (dirname) => {
    readdir(dirname)
    .then(files => {
        console.log(files)
    })
}

function readdir(dirname) {
    return new Promise((res, rej) => {
        recursive(dirname, [], (err, files) => {
            if (err == null) {
                res(files)
            } else {
                rej(err)
            }
        })
    })
}

module.exports = autoloader
