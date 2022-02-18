const { num1 } = require("./binary-tree");

const treesumRec = (root) => {
  if (root === null) return 0;
  return treesumRec(root.left) + treesumRec(root.right) + root.val;
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

console.log(treesumRec(num1));
console.log(treeSum(num1));
