//Задание 4.1
let circleRadius = 18;

function circleArea(r) {
	return `Площадь круга ${(Math.PI * r ** 2).toFixed(2)} см.кв.`;
}

console.log(circleArea(circleRadius));

//Задание 4.2
let length = 5;
let width = 3;

function rectangleArea(l, w) {
	return `Площадь прямоугольника ${(l * w).toFixed(2)} см.кв.`;
}

console.log(rectangleArea(length, width));

//Задание 4.3
let cylinderRadius = 3;
let height = 5;

function cylinderVolume(r, h) {
	return `Объем цилиндра ${(Math.PI * r ** 2 * h).toFixed(2)} см.кб.`;
}

console.log(cylinderVolume(cylinderRadius, height));
