function divide(numerator, denominator) {
    if(denominator === 0) throw new Error('Ошибка! На 0 делить нельзя.')
    if(typeof(numerator) !== 'number' || typeof(denominator) !== 'number') {
        throw new Error('Ошибка! Один из аргументов не является числом')
    }

    return console.log(numerator / denominator);
}

//Позитивный сценарий
try {
    divide(6, 2)
} catch (error) {
    console.log(error)
} finally {
    console.log('Работа завершена')
}

//Деление на 0
try {
    divide(3, 0)
} catch (error) {
    console.log(error)
} finally {
    console.log('Работа завершена')
}

//Один из аргументов не число
try {
    divide(3, "sdsd")
} catch (error) {
    console.log(error)
} finally {
    console.log('Работа завершена')
}

try {
    divide("ddsdf", 6)
} catch (error) {
    console.log(error)
} finally {
    console.log('Работа завершена')
}