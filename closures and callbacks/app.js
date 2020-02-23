//kết thúc và gọi trở lại
function sayHiLater () {
    var greeting = 'Hi';
    setTimeout(function (){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

//callback
function tellMeWhenDone (callback) {
    var a = 1000;
    var b = 2000;
    callback(); //the callback, it runs the function  I give it!;
}

tellMeWhenDone(function(){
    console.log('I am done!');
});

tellMeWhenDone(function(){
    console.log('All done...');
});
