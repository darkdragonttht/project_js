/*
 * lịch sử javascript và tạo hàm mới
 */
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function invoked');
}

Person.prototype.getFullName = function () {
    return this.firstname + ' ' +  this.lastname;
};

var quang = new Person('Quang', 'Nguyen');
console.log(quang);

var quan = new Person('Quan', 'Nguyen');
console.log(quan);

Person.prototype.getFormalFullName = function () {
    return this.lastname + ', ' +  this.firstname;
};

console.log(quang.getFormalFullName());