//function factory
function makeGreeting (language) {
    return function (firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' +  lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetingEnglish = makeGreeting('en');
var greetingSpanlish = makeGreeting('es');

greetingEnglish('Quang', 'Nguyen');
greetingSpanlish('Quang', 'Nguyen');