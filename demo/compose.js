var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

let result = shout("send in the clowns");
/** 
 * var shout = function(x){
 *     return exclaim(toUpperCase(x));
};
*/


console.log(result)
    //=> "SEND IN THE CLOWNS!"


// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
    makes.push(cars[i].make);
}


// 声明式
var makes = cars.map(function(car) { return car.make; });