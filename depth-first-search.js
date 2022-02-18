const { a, num1 } = require("./binary-tree");

const depthFirst = (root) => {
  const result = [];
  const stack = [];
  if (root) stack.push(root);

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

const depthFirstRec = (root) => {
  if (root === null) return [];

  const left = depthFirstRec(root.left);
  const right = depthFirstRec(root.right);
  return [root.val, ...left, ...right]
}

console.log(depthFirst(a));
console.log(depthFirst(num1))
// console.log(depthFirst(null))
// console.log(depthFirstRec(a))
// console.log(depthFirstRec(null))
