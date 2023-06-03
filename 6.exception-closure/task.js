function parseCount(number) {
	const parseNumber = Number.parseFloat(number);
	if (Number.isNaN(parseNumber) === true) {
		throw new Error("Невалидное значение");
	} else {
		return parseNumber;
	}
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (a + c) < b || (c + b) < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		const p = this.a + this.b + this.c;
		return p;
	}

	get area() {
		const halfP = (this.a + this.b + this.c) * 0.5;
		const s = Math.sqrt(halfP * ((halfP - this.a) * (halfP - this.b) * (halfP - this.c)));
		return parseFloat(s.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}