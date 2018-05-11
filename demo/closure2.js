function setupSomeGlobals() {

    var num = 666;

    gAlertNumber = function() { console.log(num); }

    gIncreaseNumber = function() { num++; }

    gSetNumber = function(x) { num = x; }

}

setupSomeGlobals();
gAlertNumber(); // 输出666

gIncreaseNumber();
gAlertNumber(); // 输出667

gSetNumber(5);
gAlertNumber(); // 输出5


function buildList(list) {
    var result = [];

    for (var i = 0; i < list.length; i++) {
        var item = 'item' + list[i];
        result.push(function() { console.log(item + ' ' + list[i]) });
    }

    return result;
}

var fnlist = buildList([1, 2, 3]);

for (var j = 0; j < fnlist.length; j++) {
    fnlist[j](); // 连续输出3个"item3 undefined"
}

function newClosure(someNum, someRef) {
    var anArray = [1, 2, 3];
    var num = someNum;
    var ref = someRef;

    return function(x) {
        num += x;

        anArray.push(num);

        console.log('num: ' + num + "; " + 'anArray ' + anArray.toString() + "; " + 'ref.someVar ' + ref.someVar);
    }
}

closure1 = newClosure(40, { someVar: "closure 1" });
closure2 = newClosure(1000, { someVar: "closure 2" });

closure1(5); // 打印"num: 45; anArray 1,2,3,45; ref.someVar closure 1"
closure2(-10); // 打印"num: 990; anArray 1,2,3,990; ref.someVar closure 2"