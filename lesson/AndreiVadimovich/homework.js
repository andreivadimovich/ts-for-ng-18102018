"use strict";
function isInArray(one, two) {
    for (var i = 0; i < two.length; i++) {
        if (one.indexOf(two[i]) < 0) {
            return false;
        }
    }
    return true;
}
function summator(vals) {
    var str;
    // ? добавляю в 1 элемент массива пустое значение (почему-то когда reduce работает он
    // начинат читать значения со второго элемента массива)
    vals.unshift('');
    return vals.reduce(function (previousValue, currentValue) {
        if (typeof currentValue === 'string') {
            // соединить все значения массива в строку
            return String(vals.join(''));
        }
        else {
            return Number(previousValue) + +currentValue;
        }
    });
}
function uniqueValues(value, index, vals) {
    return vals.indexOf(value) === index;
}
function gedtUnique(vals) {
    return vals.filter(self.uniqueValues);
}
function toMatrix(data, rowSize) {
    var resultArr = [];
    for (var i = 0; i < data.length; i++) {
        if (typeof data[i] !== 'undefined' && data[i].length !== 0) {
            resultArr[i] = [data[i], data[i].length];
        }
    }
    return resultArr;
}
