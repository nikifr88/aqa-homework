async function getTodosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        throw 'Ответ не пришел'
    }
}

async function getUserAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
    } catch (error) {
        throw 'Ответ не пришел'
    }
}

let resultAll = [];
let resultRace;

Promise.all([getTodosAsync(), getUserAsync()])
    .then(arr => {
        resultAll.push([...arr]);
        console.log('ResultAll: ', resultAll);
    })
    .catch(() => {
        resultAll.push('Ни один из запросов не выполнился');
        console.log('ResultAll: ', resultAll);
    });

Promise.race([getTodosAsync(), getUserAsync()])
    .then(data => {
        resultRace = data;
        console.log('ResultRace: ', resultRace);
    })
    .catch(() => {
        resultRace = 'Ни один из запросов не выполнился';
        console.log('ResultRace: ', resultRace);
    });