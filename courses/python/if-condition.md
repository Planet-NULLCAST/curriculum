---
title: "Introduction To Javascript"
subheading: "If Condition"
next: ""
prev: "datatypes"
testCase: [
			{
				id: 1,
        chapterName: "if-condition",
				case: ["let a = 5;", "let a = 5"],
				hint: "a should have value of 5",
				isCorrect: false
			},
			{
                id: 2,
                case: ["if (a === 5) {"],
                hint: "use if syntax to check a's value as 5",
                isCorrect: false
            },
			{
                id: 3,
                case: ["console.log(true);","console.log(true)"],
                hint: "use console.log to print true",
                isCorrect: false
            },
            {
                id: 4,
                case: ["}"],
                hint: "use closing curly braces } ",
                isCorrect: false
            }
		]
---

The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

```javascript
if (year == 2015) {
  console.log("That's correct!");
  console.log("You're so smart!");
}
```

## The else clause

The if statement may contain an optional “else” block. It executes when the condition is falsy.

```javascript
if (year == 2015) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?"); // any value except 2015
}
```

---

## Complete the tasks below:

- Create a variable "a" of type let with value 5

- Check whether a equals 5

- If a equals 5, print true in console

- Use closing curly braces
