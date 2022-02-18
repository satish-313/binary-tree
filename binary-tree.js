class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
let h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;
d.left = h;

/* 
          a
        /   \
       b     c
      / \    / \
      d  e   g  f
     /
     h
*/

let num1 = new Node(1);
let num2 = new Node(2);
let num3 = new Node(3);
let num4 = new Node(4);
let num5 = new Node(5);
let num6 = new Node(6);
let num7 = new Node(7);
let num8 = new Node(8);
let num9 = new Node(9);
let num10 = new Node(10);
let num11 = new Node(11);
let num12 = new Node(12);

// let num1 = new Node(10);
// let num2 = new Node(-2);
// let num3 = new Node(4);
// let num4 = new Node(4);
// let num5 = new Node(25);
// let num6 = new Node(6);
// let num7 = new Node(33);
// let num8 = new Node(-8);
// let num9 = new Node(9);
// let num10 = new Node(50);
// let num11 = new Node(-11);
// let num12 = new Node(19);

num1.left = num2;
num1.right = num3;
num2.left = num4;
num2.right = num5;
num3.left = num6;
num3.right = num7;
num4.left = num8;
num4.right = num9;
num5.right = num10;
num6.right = num11;
num7.left = num12;

/* 
                      1
                   /     \
                  2        3
                /   \     /  \
               4     5    6    7
              / \     \    \   /
             8   9     10  11 12
*/

module.exports = { a, num1 };
