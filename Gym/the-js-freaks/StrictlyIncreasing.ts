function solution(numbers: number[]): boolean {
	// base cases
	if (numbers.length == 1) return true;
	if (isStrictlyIncresing(numbers)) return true;

	let result: boolean = false;
	for (let pos = 0; pos < numbers.length; pos++) {
		let tempArray = numbers;

		if (numbers[pos] >= 10) {
			tempArray[pos] = swapNumbersaAndPassBack(numbers[pos]);

			if (!isStrictlyIncresing(tempArray)) {
				result = false;
				return result;
			}
			result = true;
			tempArray = numbers;
		}
	}

	return result;
}

function swapNumbersaAndPassBack(n: number) {
	let numStr = String(n).split('');

	// Swapped the two digits
	if (numStr.length == 2) {
		[numStr[0], numStr[1]] = [numStr[1], numStr[0]];
		return Number(numStr.join(''));
	}

	// if (numStr.length == 3) {
	// 	[numStr[0], numStr[1]] = [numStr[1], numStr[0]];
	// }

	return 1;
}

function isStrictlyIncresing(numArr: number[]) {
	for (let i = 0; i < numArr.length - 1; i++) {
		if (numArr[i] > numArr[i + 1]) {
			return false;
		}
	}
	return true;
}

let numbers = [31, 29];

console.log(solution(numbers));
