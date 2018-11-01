const fs = require('fs');

const file = fs.createWriteStream('./writer.txt');

var writeData = function(){
    var i = 0;
    while(i <= 10){
        file.write('Line' + i + '\n');
        i++;
    }
    file.end();
}

module.exports = {
    writeData : writeData
}