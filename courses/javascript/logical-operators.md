---
title: "Introduction To Javascript"
subheading: "Logical Operators"
next: "if-condition"
prev: "variables"
testCase: [
			{
				id: 1,
				case: ["let a = true, b = false;", "let a = true, b = false"],
				hint: "a should have a value of true and b should have a value of false",
				isCorrect: false
			},
			{
				id: 2,
				case: ['let result = a && b;',"let result = a && b"],
				hint: "result should have the value after performing AND on a and b",
				isCorrect: false
			},
			{
				id: 3,
				case: ["result = a || b;", "result = a || b"],
				hint: "result should have the value after performing OR on a and b",
				isCorrect: false
			},
			{
				id: 4,
				case: ["result = !a;", "result = !a"],
				hint: "result should have the value after performing NOT on a",
				isCorrect: false
			}
		]
---

There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

## OR ||

The “OR” operator is represented with two vertical line symbols || :

```javascript
result = a || b;
```

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
There are four possible logical combinations:

```javascript
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
```

As we can see, the result is always true except for the case when both operands are false.

## AND &&

The AND operator is represented with two ampersands &&:

```javascript
result = a && b;
```

In classical programming, AND returns true if both operands are truthy and false otherwise:

```javascript
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
```

An example with if:

```javascript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}
```

## ! NOT

The boolean NOT operator is represented with an exclamation sign !.

```javascript
result = !value;
```

The operator accepts a single argument and does the following:

- Converts the operand to boolean type: true/false.
- Returns the inverse value.

### Example:

```javascript
console.log(!true); // false
console.log(!0); // true
```

---

## Complete the tasks below:

- Create two variables a and b and assign values true and false respectively.

- Perform an AND operation on a and b and assign the value to a variable result.

- Perform an OR operation on a and b and assign the value to result.

- Perform a NOT operation on a and assign the value to result.
