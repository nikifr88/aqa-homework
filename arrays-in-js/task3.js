const numbers = [10, 20, 30, 40, 50];

function sumOfArrayElements(numArr) {
	const sum = numArr.reduce((accum, currVal) => accum + currVal, 0);

	return console.log(`Сумма чисел массива: ${sum}`);
}

sumOfArrayElements(numbers);
