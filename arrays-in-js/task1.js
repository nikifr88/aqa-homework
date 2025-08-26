const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

function countingNumbers(numArr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for(let i = 0; i <= numArr.length - 1; i++) {
        if(numArr[i] > 0) positiveCount++;
        if(numArr[i] < 0) negativeCount++;
        if(numArr[i] === 0) zeroCount++;
    }

    return console.log(`
        Кількість позитивних чисел: ${positiveCount}
        Кількість негативних чисел: ${negativeCount}
        Кількість нульових чисел: ${zeroCount}
    `)
}

countingNumbers(numbers);