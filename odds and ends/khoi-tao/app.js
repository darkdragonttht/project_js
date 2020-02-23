/*
 * khởi tạo
 */

var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        address: [
            '111 Main St',
            '222 Main St'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        address: [
            '333 Main St',
            '444 Main St'
        ],
        greet: function () {
            return 'Hello!';
        }
    }
];

console.log(people);