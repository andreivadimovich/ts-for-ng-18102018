type TArgs = number | string;

function isInArray(one: TArgs[], two: TArgs[]): boolean {
    for (let i: number = 0; i < two.length; i++) {
        if (one.indexOf(two[i]) < 0) {
            return false;
        }
    }

    return true;
}

function summator(vals: TArgs): TArgs {
    const str: TArgs;

    // ? добавляю в 1 элемент массива пустое значение (почему-то когда reduce работает он
    // начинат читать значения со второго элемента массива)
    vals.unshift('');

    return vals.reduce(function (previousValue: TArgs, currentValue: TArgs) {
        if (typeof currentValue === 'string') {
            // соединить все значения массива в строку
            return String(vals.join(''));
        } else {
            return Number(previousValue) + +currentValue;
        }
    });
}

function uniqueValues(value: TArgs, index: TArgs, vals: TArgs): TArgs {
    return vals.indexOf(value) === index;
}
function gedtUnique(vals: TArgs[]): TArgs[] {
    return vals.filter(self.uniqueValues);
}

function toMatrix(data: TArgs[], rowSize: number): TArgs[] {
    const resultArr: TArgs[] = [];

    for (let i: number = 0; i < data.length; i++) {
        if (typeof data[i] !== 'undefined' && data[i].length !== 0) {
            resultArr[i] = [data[i], data[i].length];
        }
    }
    return resultArr;
}