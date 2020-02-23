var objectLiteral = {
    firstname: 'Quang',
    isProgrammer: true
}

console.log(JSON.stringify(objectLiteral)); //chuyển từ object thành json

var jsonValue = JSON.parse('{"first": "Hay","isProgrammer": true}'); //chuyển từ json thành object
console.log(jsonValue);