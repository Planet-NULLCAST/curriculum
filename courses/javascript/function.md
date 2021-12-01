---
title: "Introduction to Javascript function"
subheading: "Function"
prev: "prototypes"
next: ""
contentOnly: false
testCase:
  [
    {
      id: 1,
      case: ["function addTwoNumbers(num1, num2) {"],
      hint: "Please re check the function syntax and code formatting.",
      isCorrect: false
    },
    {
      id: 2,
      case: ["const sum = num1 + num2;", const sum = num1 + num2"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 3,
      case: ["return sum;", "return sum"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 4,
      case: ["}"],
      hint: 'Please close the function by "}" and check code formatting.',
      isCorrect: false
    },
    {
      id: 5,
      case:
        [
          "console.log(addTwoNumbers(5, 6));",
          "console.log(addTwoNumbers(5,6))"
        ],
      hint: "Please check the syntax and code formatting",
      isCorrect: false
    }
  ]
---

A `function`(a.k.a method) is basically a set of instructions that performs a certain task. It can receive inputs and can also return values to where the function has been called.

## Functions in JavaScript

In Javascript, a function is declared using the `function` keyword. For example:

```javascript
function printText(text1, text2) {
  // function body
  console.log(text1, text2);
}
let str1 = "Hello";
let str2 = "world!";
printText(str1, str2); //   Hello world!
```

From the above code snippet a function consist of :

- The name of the function **_printText_**.

- The variables enclosed in parentheses are the `parameters` of that function.

- The function body enclosed in curly brackets, which contains the JavaScript statements that describes the function

- Finally we invoke the function call by the statement `printText(str1,str2);`. The values of `str1` and `str2` are copied to `text1` and `text2` respectively.

## A function can return values as well

The `return` keyword is used to return a value from a function. Let's see an example:

```javascript
function multiplyTen(num) {
  return num * 10;
}
const num = multiplyTen(5);
console.log(num); // 50
```

## Complete the task below

- create a function named `addTwoNumbers` with parameters `num1` and `num2`.

- Inside the function store `num1 + num2` to a const datatype `sum`.

- The function should return the `sum`

- Then print the return from the function. Pass 5 and 6 as the function arguments.
