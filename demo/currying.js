// 柯里化

// 在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，
// 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
// 并且返回接受余下的参数而且返回结果的新函数的技术。
// 这个技术由克里斯托弗·斯特雷奇以逻辑学家哈斯凯尔·加里命名的，
// 尽管它是Moses Schönfinkel和戈特洛布·弗雷格发明的。

// 说的明白一点就是，给函数传递一部分参数，让它返回一个函数去处理其他参数，举个例子，求三个数之和：
let addOne = function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}

let one = addOne(3)
console.log(one) //ƒ (y) {return function (z) {return x + y + z}}
let two = one(4)
console.log(two) //ƒ (z) {return x + y + z}
let three = two(5)
console.log(three) //12


// javascript函数柯里化--详细说明链接

// 高阶函数定义：将函数作为参数或者返回值是函数的函数。