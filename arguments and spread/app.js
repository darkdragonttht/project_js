function greet(firstname, lastname, language, ...other) {
    language = language || 'EN';

    if(arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('------');
}

greet(); //xuất ra giá trị có trong hàm
greet('Quang');
greet('Quang', 'Nguyen');
greet('Quang', 'Nguyen', 'VI', 'Huong Ngai', 'Viet Nam'); //nếu tên hàm có giá trị tương ứng với nó thì sẽ ưu tiên ngoài tên hàm