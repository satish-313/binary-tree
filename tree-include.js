const { a } = require("./binary-tree");

const treeInclude = (root, target) => {
  if (root === null) return false;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) return true;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};

const treeIncludeRec = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  const left = treeIncludeRec(root.left, target);
  const right = treeIncludeRec(root.right, target);
  return left || right;
};

const breathFirst = (root,target) => {
  const queue = [root];

  while(queue.length > 0){
    let value = queue.shift();
    if (value.val === target) return true;
    if (value.left) queue.push(value.left);
    if (value.right) queue.push(value.right)
  }

  return false;
}

console.log(treeInclude(a, "f"));
console.log(treeInclude(a, "k"));
console.log(breathFirst(a, "f"));
console.log(breathFirst(a, "k"));
console.log(treeIncludeRec(a, "a"))
console.log(treeIncludeRec(a, "z"))
