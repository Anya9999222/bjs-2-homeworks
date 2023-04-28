"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - (4 * a * c);
	let x1;
	let x2;

	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	} else if (d < 0) {
		arr = [];
	}
	return arr;
}

console.log(solveEquation(1, -4, -5))
console.log(solveEquation(1, -6, 9))
console.log(solveEquation(3, -4, 2))



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = (percent / 100) / 12;
	let S = amount - contribution;
	let n = countMonths;
	let sum = S * (P + (P / (((1 + P) ** n) - 1)));
	let sumTotal = sum * countMonths;

	return parseFloat(sumTotal.toFixed(2));

}

console.log(calculateTotalMortgage("10", 0, `50000`, 12))
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
console.log(calculateTotalMortgage(10, 0, 20000, 24))
console.log(calculateTotalMortgage(10, 1000, 20000, 24))
console.log(calculateTotalMortgage(10, 20000, 20000, 24))
console.log(calculateTotalMortgage(10, 0, 10000, 36))