const car1 = {
    brand: 'Renault',
    model: 'Megane',
    year: 2017
};

const car2 = {
    brand: 'Vauxhall',
    model: 'Astra',
    //В задаче, вероятно, опечатка
    owner: 'Mike',
    //year: 2009 или owner: 2009
}

const car3 = {...car1, ...car2};

console.log(car3);