// JavaScript的函数可以嵌套在其他函数中定义，
// 这样它们就可以访问它们被定义时所处的作用域中的任何变量。
// 这意味着JavaScript函数构成了一个闭包（closure），它给JavaScript带来了非常强劲的编程能力。

//  闭包  返回一个函数   访问 私有函数和变量



(function() {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
    console.log(msg);
}());



var CachedSearchBox = (function() {
    var cache = {},
        count = [];
    return {
        attachSearchBox: function(dsid) {
            if (dsid in cache) { //如果结果在缓存中
                return cache[dsid]; //直接返回缓存中的对象
            }
            var fsb = new uikit.webctrl.SearchBox(dsid); //新建
            cache[dsid] = fsb; //更新缓存
            if (count.length > 100) { //保正缓存的大小<=100
                delete cache[count.shift()];
            }
            return fsb;
        },
    }
})()

var person = function() {
    //变量作用域为函数内部，外部无法访问
    var name = "default";
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }
    }
}();


function Person() {
    var name = "default";
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }
    }
};

var p = new Person();
p.setName("Tom");
console.log(p.getName()); //Tom

var Jack = function() {};
//继承自Person
Jack.prototype = new Person();
//添加私有方法
Jack.prototype.Say = function() {
    console.log("Hello,my name is Jack");
};
var j = new Jack();
j.setName("Jack");
j.Say();
console.log(j.getName()); //Jack