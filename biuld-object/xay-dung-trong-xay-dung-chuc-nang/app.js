/*
 * xây dựng trong xậy dựng chức năng
 */

String.prototype.isLenghtGreaterThan = function (limit) {
    return this.length > limit;
};

console.log('Quang'.isLenghtGreaterThan(5));

Number.prototype.isPositive = function () {
    return this > 0;
};

//nguy hiểm trong mảng
Array.prototype.myCustomFeature = 'cool';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

for (var i = 0; i < arr.length; i++) {

}