let firstUser = {
    name: 'Max',
    age: 19,
    isAdult: undefined
};
let secondUser = {
    name: 'Igor',
    age: 16,
    isAdult: undefined
};

function ageChecker(user) {
    let result;

    if(user.age >= 18) {
        result = `Пользователь ${user.name} достиг совершеннолетия, возраст пользователя ${user.age}`;
        user.isAdult = true;
    } else {
        result = `Пользователь ${user.name} несовершеннолетний, возраст пользователя ${user.age}`;
        user.isAdult = false;
    }

    return result;
}

console.log(ageChecker(firstUser), firstUser.isAdult);
console.log(ageChecker(secondUser), secondUser.isAdult);