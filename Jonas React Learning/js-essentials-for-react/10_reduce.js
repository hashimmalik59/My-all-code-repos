const nums = [1, 2, 3, 4, 5];
const newNums = nums.reduce((acc, currVal) => acc + currVal, 0);
console.log(nums);
console.log(newNums);
console.log(typeof newNums);