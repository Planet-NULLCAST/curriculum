---
title: "Introduction To Javascript"
subheading: "Data types"
next: "logical-operators"
prev: "variables"
testCase: [
			{
				id: 1,
				chapterName: "datatypes",
				case: ["let num = 101;", "let num = 101"],
				hint: "num should have value of 101",
				isCorrect: false
			},
			{
                id: 2,
                case: ["let str='hello';","let str='hello'"],
                hint: 'str should have a value of "hello"',
                isCorrect: false
            },
            {
                id: 3,
                case: ["let flag=true;", "let flag=true"],
                hint: "flag should have a value of true",
                isCorrect: false
            }
		]
---

A value in JavaScript is always of a certain type. It can be a string or a number or of any other type.

There are **eight basic data types** in JavaScript. A varaible can store any such value. It can store a string at one moment and then store a number later.

```javascript
let message = "hello";
message = 123456;
```

Programming languages that allow such things, such as JavaScript, are called **“dynamically typed”**, meaning that there exist data types, but variables are not bound to any of them.

## Number

The _number_ type represents both integer and floating point numbers.

```javascript
let n = 123;
n = 12.345;
```

## String

The _string_ in JavaScript must be surrounded by quotes. In JavaScript, there are 3 types of quotes. Double quotes "" , Single quotes '' and Backticks ``. Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

```javascript
let str = "Hello"; // Hello
let str2 = "Single quotes are ok too"; // Single quotes are ok too
let phrase = `can embed another ${str}`; // can embed another Hello
let result = `the result is ${1 + 2}`; // the result is 3
```

## Boolean

The boolean type has only two values: true and false. This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

---

## Complete the tasks below:

- Create a variable num of type let and value 101

- Create variable str of type let and value "hello"

- Create a variable flag of type let and value true
