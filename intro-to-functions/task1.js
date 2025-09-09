// function declaration
function areaRectangleDec(width, height) {
	return width * height;
}

console.log(areaRectangleDec(5, 10));

//function expression
const areaRectangleExp = function (width, height) {
	return width * height;
};

console.log(areaRectangleExp(6, 11));

//arrow function
const areaRectangleArr = (width, height) => width * height;

console.log(areaRectangleArr(7, 12));
