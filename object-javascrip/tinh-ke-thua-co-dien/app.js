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

// console.log(john);

john.__proto__ = person; //biến join được kế thừa object person nhờ __proto__
console.log(john.getFullName());

//trường hợp 2
var jain = {
    firstname:'Jain'
};

jain.__proto__ = person;
console.log(jain.getFullName());