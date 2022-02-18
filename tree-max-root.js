const { num1 } = require("./binary-tree");

const treeMaxSumRec = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  let value = Math.max(treeMaxSumRec(root.left), treeMaxSumRec(root.right));
  return value + root.val;
};

const treeSum = (root) => {
  if (root === null) return 0;
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.val;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

console.log(treeMaxSumRec(num1));
// console.log(treeSum(num1));
