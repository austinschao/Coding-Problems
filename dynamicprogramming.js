/*
Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

The 0-th and 1-st numbers of the sequence are both 0.

The 2-nd number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous three numbers.

Solve this recursively.
*/
const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;

  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  return memo[n];
};

/*
Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.
*/
const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];

  for (let num of numbers) {
    if ((sumPossible(amount - num, numbers, memo))) {
      memo[amount] = true;
      return true;
    }
    memo[amount] = false;
  }
  return false;
};

/*
Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative.
*/
const maxPathSum = (grid, row = 0, col = 0, memo = {}) => {
  const pos = row + "," + col;
  if (pos in memo) return memo[pos];

  if (row === grid.length || col === grid[0].length) return 0;
  if (row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];

  let downPath = maxPathSum(grid, row + 1, col, memo);
  let rightPath = maxPathSum(grid, row, col + 1, memo);

  memo[pos] = grid[row][col] + Math.max(downPath, rightPath);
  return memo[pos];
};