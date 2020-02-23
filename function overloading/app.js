/*
 * Khung bên ngoài chức năng quá tải
 */
function greet(firstname, lastname, language){
    language = language || 'en';
    if(language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if(language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanlish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greet('Quang', 'Nguyen', 'en');
greet('Quang', 'Nguyen', 'es');

greetEnglish('Quang', 'Nguyen', 'en');
greetSpanlish('Quang', 'Nguyen', 'es');