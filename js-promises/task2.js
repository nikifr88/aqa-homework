function getTodos() {
	return new Promise((resolve, reject) => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch(() => reject('Ответ не пришел'));
	});
}

function getUser() {
	return new Promise((resolve, reject) => {
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch(() => reject('Ответ не пришел'));
	});
}

let resultAll = [];
let resultRace;

Promise.all([getTodos(), getUser()])
	.then((arr) => {
		resultAll.push([...arr]);
		console.log('ResultAll: ', resultAll);
	})
	.catch(() => {
		resultAll.push('Ни один из запросов не выполнился');
		console.log('ResultAll: ', resultAll);
	});

Promise.race([getTodos(), getUser()])
	.then((data) => {
		resultRace = data;
		console.log('ResultRace: ', resultRace);
	})
	.catch(() => {
		resultRace = 'Ни один из запросов не выполнился';
		console.log('ResultRace: ', resultRace);
	});
