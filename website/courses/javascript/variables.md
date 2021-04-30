---
title: "Introduction To Javascript"
subheading: "Variables"
next: "datatypes"
prev: "hello-world"
testCase: [
			{
				id: 1,
				case: ["let a;", "let a"],
				hint: "Create a variable a using let.",
				isCorrect: false
			},
			{
				id: 2,
				case: ["a = 5;", "a = 5"],
				hint: "Assign 5 to a using =.",
				isCorrect: false
			},
			{
				id: 3,
				case: ["a = 'Message';", "a = 'Message'"],
				hint: "Assign 'Message' to a using =.",
				isCorrect: false
			}
		]
---

## A Variable

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”:

```javascript
let message;
```

Now, we can put some data into it by using the assignment operator =:

```javascript
let message;
message = "Hello"; // store the string
```

The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```javascript
let message;
message = "Hello!";
alert(message); // shows the variable content
```

To be concise, we can combine the variable declaration and assignment into a single line:

```javascript
let message = "Hello!"; // define the variable and assign the value
alert(message); // Hello!
```

We can also declare multiple variables in one line:

```javascript
let user = "John",
	age = 25,
	message = "Hello";
```

That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:

```javascript
let user = "John";
let age = 25;
let message = "Hello";
```

---

## Complete the tasks below:

- Create a variable using let with variable name a.

- Assign the varable value 5.

- Then change the value to "Message".
