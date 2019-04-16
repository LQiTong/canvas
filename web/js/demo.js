var prime = function (len) {
    var i, j;
    var arr = [];

    for (i = 1; i < len; i++) {
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                break;
            }
        }

        if (i <= j && i != 1) {
            arr.push(i);
        }

    }
    return arr;
};
// console.log(prime(1000000));

var arr1 = prime(10000);
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    if (707829217 % arr1[i] === 0) {
        console.log(arr1[i]);

    }

}


// ok, 得数 866278171
var demo = 866278171;
var judge = function (res) {
    var arr = [];
    var arr1 = []
    for (let i = 0; i < res; i++) {
        arr.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        var judgement = element % 2 == 0 ? "偶数" : "奇数";
        if (judgement === "奇数") {
            arr1.push(res)
        }
    }
    return arr1;
}
var judge3 = function (demoFor) {
    var arr = judge(demoFor);
    console.log(arr);

}

judge3(demo);
