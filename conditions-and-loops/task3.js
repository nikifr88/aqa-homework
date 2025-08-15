const number = 5;

function multiplicationTableUsingFor (num) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

multiplicationTableUsingFor(number);

//Для промежутка между console.log
console.log("-----------");

function multiplicationTableUsingWhile (num) {
    let i = 1;
    while (i <= 10) {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}

multiplicationTableUsingWhile(number);