console.log("Hello");

/*var time = 0;
setTimeout(function(){
    console.log("3 second passed");
}, 3000);

var timer = setInterval(function(){
    time+=2;
    console.log(time + " second passed");
    if(time >5 ){
        clearInterval(timer);
    }
}, 2000);
*/
console.log(__dirname);
console.log(__filename);

//var counter = require('./stuff');
//console.log(counter(['i', 'am', 'you']));

var stuff = require('./stuff');
console.log(stuff.counter(['i', 'am', 'you']));
console.log(stuff.adder(1,12));
console.log(stuff.adder(stuff.pi,5));

var events = require("events");
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message){
    console.log(message);
});

myEmitter.emit('someEvent','the event was emitted');

var util = require('util');
var Person = function(name){
    this.name = name;
}

util.inherits(Person,events.EventEmitter);

var person1 = new Person("person1");
var person2 = new Person("person2");
var person3 = new Person("person3");

var people = [person1,person2,person3];
people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" said "+ msg);
    })
});

person1.emit('speak','hey dudes');
person2.emit('speak','hello');
person3.emit('speak','how are you?');
