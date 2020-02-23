/*
 * tạo đối tượng và sự kế thừa nguyên mẫu thuần thúy
 */

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
        return 'Hi ' + this.firstname;
    }
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);