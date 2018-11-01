var fs = require('fs');
 
var stream = fs.createReadStream('data.txt');

stream.on("data", function(str){
    var buf = Buffer.from(str);
    console.log(buf.toString());
})
