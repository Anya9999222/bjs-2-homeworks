function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	let avg = sum / arr.length;
	return {
		min: min,
		max: max,
		avg: parseFloat(avg.toFixed(2))
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i += 1) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let maxValue = Math.max(...arr);
	let minValue = Math.min(...arr);
	let differenceValue = maxValue - minValue;
	if(arr.length === 0){
    return 0;
  }
	return differenceValue;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}

	}
	let elementMargin = sumEvenElement - sumOddElement;
	return elementMargin;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}

	let elementDivision = sumEvenElement / countEvenElement;
	if(arr.length === 0){
    return 0;
  }
	return elementDivision;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i += 1) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}