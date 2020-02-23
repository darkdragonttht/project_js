function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function b() {
    console.log(this);
}

a();

console.log(newvariable);

b();

var c = {
    name: 'The c object',
    log: function () {

        var seft = this;
        this.name = 'Update c object';
        console.log(seft);
        var setname = function (newname) {
            this.name = newname;
        }
        setname('Update again! Update c object');
        console.log(seft);
    }
}

c.log();