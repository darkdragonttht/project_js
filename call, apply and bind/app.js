var person = {
    firstname: 'Quang',
    lastname: 'Nguyen',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2){
    console.log('Logger: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');
};

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

(function(lang1, lang2){
    console.log('Logger: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');
}).apply(person, ['es', 'en']);


// chức năng 'mượn'
var person2 = {
    firstname: 'Quan',
    lastname: 'Tran'
}

console.log(person.getFullName.apply(person2));

// function currying

function multifly(a, b) {
    return a*b;
}

var multiflyByTwo = multifly.bind(this, 2);
console.log(multiflyByTwo(4));

var multiflyByThree = multifly.bind(this, 3);
console.log(multiflyByThree(4));












