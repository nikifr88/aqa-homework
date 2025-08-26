const numbers = [1, 2, 3, 4, 5];

function increasingArrayValues(numArr) {
    //Надеюсь правильно понял поставленную задачу
    const newArr = numArr.map((elem, i) => elem * i)
    
    return console.log(`
        Изначальный массив: ${numArr}
        Модифицированный массив: ${newArr}
    `)
}

increasingArrayValues(numbers);