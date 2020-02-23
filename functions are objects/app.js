/*
 * function are object
 */
// function greet() {
//     console.log('hi');
// }
//
// greet.language = 'english';
// console.log(greet.language);

/*
 * các câu lệnh hàm và biểu thức chức năng
 */

greet();
function greet(){
    console.log('hi');
}

var anonymouseGreet = function(){
    console.log('hi');
}

anonymouseGreet();

function log(a) {
    // console.log(a); //trường hợp không có giá trị a
    a(); //trường hợp có giá trị a
}

log(function (){
    console.log('hi đại ca');
});