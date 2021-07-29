---
title: "Introduction To Javascript"
subheading: "The \"switch\" Statement"
next: "arithmetic-operators"
prev: "if-condition"
contentOnly: false
testCase: [
			{
				id: 1,
				case: ["switch(year) {"],
				hint: "switch statement init",
				isCorrect: false
			},
			{
				id: 2,
				case: ["case 2021:"],
				hint: "Handling the case where year is number 2021",
				isCorrect: false
			},
			{
				id: 3,
				case: ["case '2021':", "case \"2021\":"],
				hint: "Handling the case where year is string '2021'",
				isCorrect: false
			},
			{
				id: 4,
				case: [
					"console.log('You guessed it right!')",
					"console.log(\"You guessed it right!\")",
					"console.log('You guessed it right!');",
					"console.log(\"You guessed it right!\");"
				],
				hint: "True part of if statement",
				isCorrect: false
			},
			{
				id: 5,
				case: ["default:"],
				hint: "Default Statement",
				isCorrect: false
			},
			{
				id: 6,
				case: [
					"console.log('How can you be so wrong?')",
					"console.log(\"How can you be so wrong?\")",
					"console.log('How can you be so wrong?');",
					"console.log(\"How can you be so wrong?\");"
				],
				hint: "Else part of if statement",
				isCorrect: false
			},
			{
				id: 7,
				case: ["}"],
				hint: "Closing Bracket of Switch",
				isCorrect: false
			},
		]
---

A `switch` statement can replace multiple `if` checks.

It gives a more descriptive way to compare a value with multiple variants.

---

## Syntax

The `switch` has one or more case blocks and an optional default.

It looks like this:

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
- If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
- If no case is matched then the default code is executed (if it exists).

### Example

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
```
Here the `switch` starts to compare `a` from the first `case` variant that is 3. The match fails.

Then 4. That’s a match, so the execution starts from `case` 4 until the nearest `break`.

**If there is no `break` then the execution continues with the next `case` without any checks.**

### An example without `break` -

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```

In the example above we’ll see sequential execution of three alerts:

```javascript
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

This can be used for grouping of `switch` cases like:

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

Now both 3 and 5 show the same message.

---

## Complete the tasks below:

- Rewrite the following `if` statement

```js
if (year == 2021) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?");
}
```