---
title: "Introduction To Javascript"
subheading: "Arrow Functions"
next: ""
prev: "function"
testCase: [
            {
                id: 1,
                case: ["let firstName = 'Gabe'", "let firstName = 'Gabe';" ],
                hint: "declare a string variable firstName",
                isCorrect: false
            },
            {
                id: 2,
                case: ["let lastName = 'Newell'", "let lastName = 'Newell';" ],
                hint: "declare a string variable lastName",
                isCorrect: false
            },
            {
                id: 3,
                case: ["let showFirstName = (firstName) => console.log(firstName);", "let showFirstName = (firstName) => console.log(firstName)"],
                hint: "define an arrow function `showFirstName` with type `let`",
                isCorrect: false
            },
            {
                id: 4,
                case: ["let showFullName = (firstName, lastName) => {"],
                hint: "define an arrow function `showFullName` with type `let`",
                isCorrect: false
            },
            {
                id: 5,
                case: ["console.log(firstName);", "console.log(firstName)"],
                hint: "console the `firstName`",
                isCorrect: false
            },
            {
                id: 6,
                case: ["console.log(lastName);", "console.log(lastName)"],
                hint: "console the `lasrName`",
                isCorrect: false
            },
            {
                id: 7,
                case: ["};", "}"],
                hint: "missing `}` bracket",
                isCorrect: false
            }
]
---

Previously called fat _arrow functions_ which was introduced in ECMAScript 2015 for a reduced syntax as compared to function expressions. _Arrow functions_ have the following form:
```js
let func = (arg1, arg2,..., argN) => expression
```

## Examples

* Without parameters

```js
let message = () => "Hello World!";
```

* With parameters

```js
let messageTo = "World"
let message = (messageTo) => "Hello " + messageTo + " !";
```
## Why arrow functions?

>__Why the need for another type of functions in the first place arise?__

Two factors lead to the creation of _arrow functions_ :

1. **Shorter function statements**

```js
var names = [
    'Kratos',
    'Mario',
    'Nathan',
    'Lara',
];

var namesLength = names.map(function(name) { return name.length; });
console.log(namesLength);
```
Using _arrow functions_ :

```js
var names = [
    'Kratos',
    'Mario',
    'Nathan',
    'Lara',
];

var namesLength = names.map(name => name.length);
console.log(namesLength);
```
2. **Separate `this` not required**

Before _arrow functions_, every function defined it's own `this` value i.e a new object in case of a constructor which proved to be less ideal to **OOPS paradigm**

```js
function People() {
    this.age = 0;

    setInterval(function ageIncrease()) {
         /* In nonstrict mode, the `this` in ageIncrease() is a global object, which is different from the `this` defined by People() constructor. */
        this.age++;
    }, 1000);
}

var p = new People();
```

Whereas an arrow function does not have it's own `this` instead it uses the `this` in it's enclosing execution. Thus in the below code, the `this` within the function passed to the setInterval has the same value as this in the enclosing function.

```js
function People() {
    this.age = 0;

    setInterval(() => {
        this.age+++;
    }, 1000);
}

var p = new People();
```
---

## Complete the tasks below:

- Rewrite the given function expressions to arrow function expressions
- Use type `let` to declare arrow functions 
```js
let firstName = 'Gabe';
let lastName = 'Newell'; 
function showFirstName(firstName) {
    console.log(firstName);
}
function showFullName(firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
}
```
