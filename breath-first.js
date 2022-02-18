const { a, num1  } = require("./binary-tree");

const breathFirst = (root) => {
  const result = [];
  const stack = [];
  if (root) stack.push(root);

  while (stack.length > 0) {
    const current = stack.shift();
    result.push(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return result;
};

console.log(breathFirst(a));
console.log(breathFirst(num1))

