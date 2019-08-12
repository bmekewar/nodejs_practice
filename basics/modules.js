// normal functions
function greetings(name ){
    console.log("Hello "+ name + "!!");
}

greetings("node");

//function expression
var sayBye = function(){
    console.log("bye");
}

sayBye();

// callbak function
function callFunction(fun){
    fun();
}

callFunction(sayBye);   
