let fn = function() {
    console.log('我是fn')
}
let fn2 = fn
console.log(fn.name) //fn
console.log(fn2.name) //fn，fn和fn2指向的是同一个function。


let fn1 = function fn1() {
    console.log('function')
}

console.log(fn1.name)
console.log(fn1.name)

let fn3 = e => e + 1
console.log(fn3(1)) //2

let fn4 = (i, y) => i + y
console.log(fn4(2, 3)) //5

let fn5 = (i, y) => {
    i += 1;
    y += 2;
    return i + y
}
console.log(fn5(5, 6)) //13

var i = 1,
    j = 2,
    k = 3;

function a(o, p, x, q) {
    var x = 4;
    console.log(i);

    function b(r, s) {
        var i = 11,
            y = 5;
        console.log(i);

        function c(t) {
            var z = 6;
            console.log(i);
        };

        var d = function() {
            console.log(y);
        };
        c(60);
        d();
    };
    b(40, 50);
}
a(10, 20, 30); //1 11 11 5

// 在es5中，函数有四种调用方式：
fn(p1, p2)
obj.fn(p1, p2)
fn.call(context, p1, p2)
fn.apply(context, p1, p2)
    // 第三和第四种才是正常的js函数调用方式，其他两种就是语法糖。