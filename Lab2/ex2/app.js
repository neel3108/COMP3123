var comp = require('./computer');
var camp = require('./comparer');

module.exports = {
    comparer:function(a,b){
        return comp.AreNumberEqual(a,b);
    },

    calculator:function(a,b){
        console.log("comparing two numbers: "+a+","+b);
        if(this.comparer(a,b)){
            console.log("number are equal");
            console.log(camp.Add(a,b));
        }
        else{
            console.log("number are not equal");
            console.log(camp.Subtract(a,b));
        }
    }

};
