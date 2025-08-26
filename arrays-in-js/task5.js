const firstArray = ['cat', 'fish', 'dog', 'bird'];
const secondArray = [1, 2, 3, 4, 5]

function combiningArrays(firstArr, secondArr) {
    return console.log([...firstArr, ...secondArr]);
}

combiningArrays(firstArray, secondArray);