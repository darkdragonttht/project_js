var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

john.__proto__ = person; //biến join được kế thừa object person nhờ __proto__

for (var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: 'Huong Ngai',
    getFormalFullName: function () {
        return this.lastname + ', ' + this.firstname;
    }
};

var jim = {
    getFirstName: function () {
        return firstname;
    }
};

_.extend(john, jane, jim);

console.log(john);