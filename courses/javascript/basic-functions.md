---
title: "Introduction to Javascript function"
subheading: "Function"
prev: "prototypes"
next: ""
contentOnly: true
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
function printText() {
  // function body
  console.log("Hello world");
}

printText(); //   Hello world!
```

From the above code snippet a function consist of :

- The name of the function **_printText_**.

- The function body enclosed in curly brackets, which contains the JavaScript statements that describes the function

## A function can return values as well

The `return` keyword is used to return a value from a function. Let's see an example:

```javascript
function multiplyTen() {
  return 10 * 10;
}
const num = multiplyTen();
console.log(num); // 100
```

## Complete the task below

- Create a button using html
- create a function thatb display an alert box with some messages.
- Add click event handler for the button to call the function
