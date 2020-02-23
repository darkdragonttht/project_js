//function statement

function greet(name) {
    console.log('Hello ' + name);
}

greet('Quang');

//using a function expression
var greetFunc = function (name) {
    console.log('Hello ' + name);
};

greetFunc('Quan');

//using an Immediately Invoked Function Expression (IIEF)
var greeting = function(name) {
    // console.log('Hello ' + name);
    return 'Hello ' + name;
}('Linh');
// console.log(greeting('Linh')); //trường hợp 1 của hàm greeting
console.log(greeting); //trường hợp 2 của hàm greeting

var firstname = 'John';
(function greet(name) {
    // console.log('Hello ' + name);
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    // return 'Hello ' + name;
}(firstname)); //IIFE