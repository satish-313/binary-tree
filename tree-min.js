const { num1 } = require("./binary-tree");

const treeminRec = (root) => {
  if (root === null) return Infinity;
  return Math.min(treeminRec(root.right), treeMin(root.left), root.val);
};

const treeMin = (root) => {
  if (root === null) return 0;
  const stack = [root];
  let min = root.val;

  while (stack.length > 0) {
    const current = stack.pop();
    if (min > current.val) min = current.val;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return min;
};

console.log(treeminRec(num1));
console.log(treeMin(num1));
