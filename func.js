/**函数真没什么特殊的，你可以像对待任何其他数据类型一样对待它们——把它们存在数组里，当作参数传递，赋值给变量...等等 */


var Flock = function(n) {
    this.seagulls = n;
};

Flock.prototype.conjoin = function(other) {
    this.seagulls += other.seagulls;
    return this;
};

Flock.prototype.breed = function(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
};

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
console.log(32)
    //=> 32

//柯里化 

var add = function(flock_x, flock_y) { return flock_x + flock_y };
var multiply = function(flock_x, flock_y) { return flock_x * flock_y };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result1 = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));
//   (2*(4+0)+ (2*4))
console.log(result1)
    //=>16