---
title: "Introduction To Javascript"
subheading: "Variables"
next: "datatypes"
prev: "hello-world"
contentOnly: false
testCase: [
			{
				id: 1,
				case: ["const a = 9;", "const a = 9"],
				hint: "Create a variable a using const.",
				isCorrect: false
			},
			{
				id: 2,
				case: ["let b;", "let b"],
				hint: "Create a variable a using let.",
				isCorrect: false
			},
			{
				id: 3,
				case: ["b = 5;", "b = 5"],
				hint: "Assign 5 to b using =.",
				isCorrect: false
			},
			{
				id: 4,
				case: ["b = 'Message';", "b = 'Message'"],
				hint: "Assign 'Message' to b using =.",
				isCorrect: false
			},
			{
				id: 5,
				case: ["var c;", "var c"],
				hint: "Create a variable a using var.",
				isCorrect: false
			},
			{
				id: 6,
				case: ["c = 7;", "c = 7"],
				hint: "Assign 7 to c using =.",
				isCorrect: false
			},
			{
				id: 7,
				case: ["c = 'Something';", "c = 'Something'"],
				hint: "Assign 'Something' to c using =.",
				isCorrect: false
			}
		]
---

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, we can use `var`, `let` and `const`.

It's easy to get confused about the difference between `var`, `let` and `const`. No worries fellow developers, we got your back.

It is important we understand the difference betweeen various scopes in `js`.

## Scopes

- Global Scope
- Local Scope

### Global Scope

- A variable can be defined outside a function and can be used inside a function.

### Local Scope

- The variable defined inside a function cannot be used outside it.

## Var

### Syntax

```js
var varname1 = "some value";
```

The variable declared using `var` can be scoped globally and locally. It is said to have functional scope.

We can also `alter` / `redeclare` the value of `var` variable if needed.

It is first initialized with the value of undefined while `hoisting`.

`Hoisting` is a JS way to call a variable/function on top of the scope before the code is executed.

Global vars becomes properties of the window object

### Example

```js
function varTest() {
  var a = 1;
  {
    var a = 2; // redeclare the same variable!
    console.log(a); // 2
  }
  console.log(a); // 2
}
```

## Let

### Syntax

```js
let varname1 = "some value";
```

The variable declared using `let` has block scope. It means that the variable is valid only inside the block and the sub-blocks / `{}` in which it is declared.

### Example

```js
function letTest() {
  let a = 1;
  {
    let a = 2; // different variable
    console.log(a); // 2
  }
  console.log(a); // 1
}
```

## Const

### Syntax

```js
const varname1 = "some value";
```

Variables declared using `const` is just like let. The only difference is that constants cannot be re-assigned.

`const` cannot be redeclared in the same block too. But can be redeclared inside sub-blocks.

Also they must be assigned at the time of declaration.

### Examples

```js
const a = "something";

a = "something else"; // This will give an error
{
  const a = "something else";
  console.log(a); // 'something else'
}
console.log(a); // 'something'
```

## Complete the tasks below:

- Create a variable named a using const and initialize it with a value of 9

- Create b variable using let with variable name a.

- Assign the variable b a value of 5.

- Then change the value of b to "Message".

- Create c variable using let with variable name a.

- Assign the variable c a value of 7.

- Then change the value of c to "Something".
