//không kết thúc một javascript
function greet(whattosay) {
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

// greet('Hi')('Quang'); // trường hợp một có thể hiểu trong một function cha với giá trị thứ nhất và function con với giá trị thứ 2
var sayHi = greet('Hi');
sayHi('Quang');//trường hợp 2 nó cũng có thể gán giá trị của 1 function bằng biến

//
function biuldFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = biuldFunctions();

fs[0]();
fs[1]();
fs[2]();

//trường hợp 2: kết thức giá trị sau mỗi vòng lặp
function biuldFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function (){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = biuldFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();