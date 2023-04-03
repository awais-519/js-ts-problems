function solution(numbers) {
	// base cases
	if (numbers.length == 1) return true;
	if (isStrictlyIncresing(numbers)) return true;
	var result = false;
	for (var pos = 0; pos < numbers.length; pos++) {
		var tempArray = numbers;
		if (numbers[pos] >= 10) {
			tempArray[pos] = swapNumbersaAndPassBack(numbers[pos]);
			if (!isStrictlyIncresing(tempArray)) {
				result = false;
				return;
			}
			result = true;
			tempArray = numbers;
		}
	}
	return result;
}
function swapNumbersaAndPassBack(n) {
	var _a;
	var numStr = String(n).split('');
	// Swapped the two digits
	if (numStr.length == 2) {
		(_a = [numStr[1], numStr[0]]), (numStr[0] = _a[0]), (numStr[1] = _a[1]);
		return Number(numStr.join(''));
	}
	// if (numStr.length == 3) {
	// 	[numStr[0], numStr[1]] = [numStr[1], numStr[0]];
	// }
	// if (numStr.length == 4) {
	// 	[numStr[0], numStr[1]] = [numStr[1], numStr[0]];
	// }
	return 1;
}
function isStrictlyIncresing(numArr) {
	for (var i = 0; i < numArr.length - 1; i++) {
		if (numArr[i] > numArr[i + 1]) {
			return false;
		}
	}
	return true;
}
var numbers = [31, 29];
console.log(solution(numbers));
