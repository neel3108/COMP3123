var greet = function(){
    for(var i = 0; i <= 10; i++){
        console.log("Hello World!");
        console.log(dateAndTime());
    }
}
var dateAndTime = function(){
    var stamp = new Date();
var date = stamp.getDate();
var month = stamp.getMonth();
var year = stamp.getFullYear();
var hours = stamp.getHours();
var minutes = stamp.getMinutes();
var str = year + "-" + month + "-" + date + "Curret Time: " + hours + ":" + minutes; 
    return str;
}


greet();