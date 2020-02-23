var person = new Object();

person["firstname"] = "Quang";
person["lastname"] = "Nguyen";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = 'Huong Ngai';
person.address.city = 'Ha Noi';
person.address.state = 'Viet Nam';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
