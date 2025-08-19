const adultValidator = age => age >= 18 ? true : false;

console.log(adultValidator(25))
console.log(adultValidator(15))