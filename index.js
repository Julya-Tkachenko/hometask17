'use strict'

// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат
// (у середині функції не має бути консоль лога!)

function getProduct(x) {
    return (y) => {
        return x * y
    }
}


console.log(getProduct(5)(2));