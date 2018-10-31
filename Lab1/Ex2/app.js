var greet = function(){
    for(var i = 0; i <= 10; i++){
        console.log("Hello World!");
        console.log(dateAndTime());
    }
}
var dateAndTime = function(){
    return Date.now();
}