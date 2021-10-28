---
title: "Introduction To Javascript"
subheading: "Foreach vs Map vs Filter"
prev: "arrow-functions"
next: ""
contentOnly: false
testCase: [
			{
				id: 1,
				case: ["const test = [1, 2, 3, 4, 5];", "const test = [1, 2, 3, 4, 5]","const test = [1,2,3,4,5];", "const test = [1,2,3,4,5]"],
				hint: "Try declaring type of 'test' as const and try including values from 1 to 5",
				isCorrect: false
			},
			{
				id: 2,
				case: ["test.forEach((item) => console.log(item));","test.forEach((item) => console.log(item))","test.forEach(item => console.log(item));","test.forEach(item => console.log(item))"],
				hint: "Use forEach method. Try using arrow function with 'item' as argument and print the values on console",
				isCorrect: false
			},
			{
				id: 3,
				case: ["var res = test.map((item) => item*4);", "var res = test.map((item) => item*4)", "var res = test.map((item) => item * 4);", "var res = test.map((item) => item * 4)","var res = test.map(item => item*4);", "var res = test.map(item => item*4)", "var res = test.map(item => item * 4);", "var res = test.map(item => item * 4)"],
				hint: "Try creating a variable named 'res' of type 'var'. Do use map method on 'test'. Try using arrow function with 'item' as argument. Do multiply each element by 4 and store the result in 'res'.",
				isCorrect: false
			},
			{
				id: 4,
				case: ["res.filter((item) => item>10);", "res.filter((item) => item>10)", "res.filter((item) => item > 10);", "res.filter((item) => item > 10)","res.filter(item => item>10);", "res.filter(item => item>10)", "res.filter(item => item > 10);", "res.filter(item => item > 10)"],
				hint: "Try using filter method on 'res'. Try using arrow function with 'item' as argument and filter elements which are greater than 10",
				isCorrect: false
			}
		]
---

In the [Prototypes](/curriculum/javascript/prototypes) session, you've already learned that everything in Javascript revolves around Objects and looked into some of the Prototypes of `Array` provided by Javascript.

<br>In this session, we'll dive more deeply into some of the most commonly used Array Prototypes(Methods).

## What Are They ?

### .forEach( )

`forEach` takes a callback function as an argument and execute the function for each individual element in an array.

*Example : Print a text in console with each elements of an array*

```javascript
var sample = [1,2,3];

sample.forEach(function(element) {
  console.log("I got " + element);
})

/* Output
  I got 1
  I got 2
  I got 3
*/
```
I assume you've already learned about arrow functions. So we can simply write it as

```javascript
sample.forEach((elm) => console.log("I got " + elm));
```

### .map( )

`map` takes a callback function as an argument and execute the function for each element on the array and returns an entirely **New Array** populated with the results of function execution.

*Example : Multiply all elements by 2 and return the result in a new array*

```javascript
sample.map((el) => el*2);  // [2,4,6]
```

### .filter( )

`filter` takes a callback function as an argument, checks a certain condition on every element in an array to see if it meets the criteria and returns an entirely **New Array** populated with the results.

*Example : Return values that are greater than 2 in a new array*

```javascript
var sample = [1,2,3,4,5];

sample.filter((el) => el > 2);   // [3,4,5]
```

## What's The Difference ?

### Returning Value 

- Both `.map()` and `.filter()` methods return a **New Array** with the transformed elements whereas `.forEach()` method returns **Undefined**.

### Usage

- Both `.map()` and `.forEach()` methods execute the function for each element of the array whereas `.filter()` method check a certain condition for each element on the array.

### Ability to chain other methods

- Since `.map()` and `.filter()` returns an array, you can chain other array methods such as `sort()` , `find()` , `reduce()` etc.

*Example : Return values that are Greater than 1 and multiply them with 2*

```javascript
var sample = [1,2,3,4,5];

sample.filter((el) => el > 1).map((item) => item*2)   // [4,6,8,10]
```

## What's In Common ?

### Callback Function Arguments

- Callback functions of all these methods accepts 3 arguments which are `elements` , `index` and `array` .

*Example : Here we print **whether element greater than 2** , **Index of element** , **Parent array***

```javascript
var sample = [1,2,3,4,5];

sample.forEach((elm, ind, ar) => console.log(elm > 2, ind, ar)));

/* Output
  false  0  [1, 2, 3, 4, 5]
  false  1  [1, 2, 3, 4, 5]
  true   2  [1, 2, 3, 4, 5]
  true   3  [1, 2, 3, 4, 5]
  true   4  [1, 2, 3, 4, 5]
*/
```

### Mutability

- None of these methods Mutate the array on which it is called

## When To Use ?

- Use `map()` when you want to transform elements in an array and return as an array.
- Use `filter()` when you want to select a subset of multiple elements based on certain condition and return as an array.
- Use `forEach()` when you want to transform elements and don't want an array as return.

---

## Complete the tasks below:

- Create an array named 'test' of type **const** with values from 1 to 5.

- Write a `forEach()` method to print each element on console. Try using arrow function for callback. The arrow function takes 'item' as an argument.

- Write a `map()` method to multiply each element with 4. Try using arrow function for callback. The arrow function takes 'item' as an argument. Declare a variable named 'res' of type **var** and save the result in it.

- The result saved in 'res' will be an array. Write a `filter()` method to filter elements which are greater than 10 from the variable 'res'. Try using arrow function for callback. The arrow function takes 'item' as an argument.
