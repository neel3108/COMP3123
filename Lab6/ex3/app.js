var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds155903.mlab.com:55903/milifloxdb');
var schema = mongoose.Schema;
var userSchema = new schema({name: String, status: String});
var user = mongoose.model('User', userSchema);

var john = user({ name: 'John', status: 'active'});

john.save(function(err) {
    if (err) throw err;

    console.log('**** John saved! *****');
  });

var jane = user({name: 'Jane', status:'Inactive'})  
jane.save(function(err) {
    if (err) throw err;

    console.log('**** Jane saved! *****');
  });

var port = process.env.port || 3000;
app.listen(port);