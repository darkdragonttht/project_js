var Quang = {
    firstname: 'Quang',
    lastname: 'Nguyen',
    address: {
        street: 'Huong Ngai',
        city: 'Ha Noi',
        state: 'Viet Nam'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Quang);

greet({
    firstname: 'Hay',
    lastname: 'Tran'
});

Quang.address2 = {
    street: 'Thach That'
}
