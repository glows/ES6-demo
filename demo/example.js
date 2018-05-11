var obj = {
    foo: function() {
        console.log(this)
    }
}

var bar = obj.foo
console.log(obj.foo()) // 打印出的 this 是 obj
bar() // 打印出的 this 是 window