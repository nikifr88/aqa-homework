const users = [
    {
        name: 'Igor',
        email: 'example.igor@gmail.com',
        age: 44
    },
    {
        name: 'Mike',
        email: 'example.mike@gmail.com',
        age: 67
    },
    {
        name: 'Oleg',
        email: 'example.oleg@gmail.com',
        age: 22
    },
    {
        name: 'Vasya',
        email: 'example.vasya@gmail.com',
        age: 66
    },
    {
        name: 'Alex',
        email: 'example.alex@gmail.com',
        age: 45
    },
    {
        name: 'Max',
        email: 'example.max@gmail.com',
        age: 13
    }
]

for(const {name, email, age} of users){
    console.log(`Имя: ${name}, Почта: ${email}, Возраст: ${age}, ${age >= 18 ? 'Совершеннолетний' : 'Eще мал'}`)
}