const fs = require('fs');
const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1);

fs.readdirSync(__dirname).forEach(file => {
    if(file !== 'index.js') {
        const filename = capitalize( file.replace('.js', '') );
        module.exports[filename] = require('./' + file);
    }
});