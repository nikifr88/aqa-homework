const person = {
	firstName: 'Mike',
	lastName: 'Petrov',
	age: 34,
};

person.email = 'example.email@gmail.com';
delete person.age;

console.log(person);
