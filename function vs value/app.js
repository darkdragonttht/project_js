/*
 * Khái niệm giá trị bên cạnh bằng cách tham khảo
 */
//by value
var a = 3;

var b;

b = a;

a = 2;

console.log(a);
console.log(b);

var c = {greeting: 'hi'};
var d;
d = c;
c.greeting = 'hello';

console.log(c);
console.log(d);

//by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

//trường hợp 2 (equals operator sets up new memory space (new address))
c = {greeting: 'howdy'};
console.log(c);
console.log(d);