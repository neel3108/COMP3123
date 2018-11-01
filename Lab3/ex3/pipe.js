var req = require('reqeust');
var fs = require('fs');
const file = fs.createWriteStream('./output.txt');
req('https://www.google.com', function(error, res, body){
     file.write(body);
    file.end();
});
