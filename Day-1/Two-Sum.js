// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.Input: nums = [2,7,11,15], target = 9

// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            var twoSum = Number(nums[i]) + Number(nums[j]);
            if (twoSum === target) {
                return [i, j];
            }
        }
    }
};

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); 
