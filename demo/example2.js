//命令式
var makes = []
for (i = 0; i < cars.length; i++) {
    makes.push(cars[i].make)
}

var makes1 = cars.map(function(car) { reutrn car.make })

var authenticate = function(form) {
    var user = toUser(form);
    return logIn(user);
}


var authenticate = compose(logIn, toUSer)