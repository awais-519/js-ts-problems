let qmCounts = 0;
let n1 = null;
let check = false;

function QuestionsMarks(str) {
	const processedString = str.split('');

	processedString.forEach((val, i) => {
		if (val === '?' && n1 != null) qmCounts++;

		if (NumberCheck(val)) {
			if (n1 === null) {
				n1 = val;
			} else if (n1 !== null && Number(n1) + Number(val) === 10) {
				check = isQMCountCorrect(n1, val) ? true : false;
				n1 = isQMCountCorrect(n1, val) ? null : n1;
				qmCounts = isQMCountCorrect(n1, val) ? 0 : qmCounts;
			}
		}
	});

	return check;
}

function isQMCountCorrect(a, b) {
	return qmCounts >= 3 ? true : false;
}

function NumberCheck(inp) {
	if (Number(inp) >= 0 && Number(inp) <= 9) {
		return true;
	}
}

console.log(QuestionsMarks('acc?7??sss?3rr1??????5'));
