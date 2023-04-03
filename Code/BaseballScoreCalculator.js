var calPoints = function (ops) {
	var stack = [];

	for (var i = 0; i < ops.length; i++) {
		var op = ops[i];
		if (!isNaN(op)) {
			stack.push(parseInt(op));
		} else if (op === '+') {
			var top1 = stack.pop();
			var top2 = stack.pop();
			var sum = top1 + top2;
			stack.push(top2);
			stack.push(top1);
			stack.push(sum);
		} else if (op === 'D') {
			var top = stack.pop();
			var doubled = top * 2;
			stack.push(top);
			stack.push(doubled);
		} else if (op === 'C') {
			stack.pop();
		}
	}

	var ouput = 0;
	for (var i = 0; i < stack.length; i++) {
		ouput += stack[i];
	}

	return ouput;
};

// A SPLITTED STRING OF OPERATIONS WILL BE GIVEN IN THE INPUT
