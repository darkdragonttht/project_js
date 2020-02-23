/*
 * Khái niệm ngoài bộ sưu tập mảng của bất kỳ thứ gì
 */

var arr = [1,
    false,
    {
        name: 'Quang',
        address: 'Ha Tay'
    },
    function (name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    'hello'
];

console.log(arr);
arr[3](arr[2].name); //mảng có thể chứa các giá trị là chuỗi, hàm, string, kiểu boolean, object
