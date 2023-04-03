/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1ST SOLUTION : n*n

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i != j && nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
};

// 2ND SOLUTION : n

var twoSum = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		if (nums[left] + nums[right] === target) return [l, j];

		if (nums[left] + nums[right] > Sum) {
			right--;
		} else left++;
	}
};

// 3RD SOLUTION

var twoSum = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [i, map.get(target - nums[i])];
		} else {
			map.set(nums[i], i);
		}
	}
};

let inp = [1, 2, 3, 4, 6, 4];
const sortedARRAY = inp.sort;
twoSum(sortedARRAY, 10);



