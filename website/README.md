# Writing test cases to the chapter

General structure of a course chapter md file is as follows:

```
title: "Course Title"
subheading: "Section Title"
next: "File name of the next chapter"
prev: "File name of the previous chapter"
testCase: [
			{
				id: 1,
				case: ["case"],
				hint: "hint message",
				isCorrect: false // leave this as false
			},
		 ]
---

// chapter content

---
Complete the tasks below:
- task 1
- task 2 etc
```

For each chapter there will be a set of tasks. Test cases are written according to these set of tasks.
For example, in the if condition chapter, you might have a set of tasks that's needed to be coded by the user such as below:

- Create a variable "a" of type let with value 5

- Check whether a equals 5

- If a equals 5, print true in console

- Use closing curly braces

For the above example, the solution shall be:

```javascript
let a = 5;
if (a === 5) {
	console.log(true);
}
```

For each of these lines a test case object should be written in the testCase array specified at beginning of the document. So for the above solution the test cases shall be written as follows.

```
testCase: [
			{
				id: 1,
				case: ["let a = 5;", "let a = 5"],
				hint: "a should have a value of 5",
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
                id: 3,
                case: ["}"],
                hint: "use closing curly braces } ",
                isCorrect: false
            }
		]
```

Each object has an `id` which corresponds to the line number. The `case` array holds different variations of that particular line which can be accepted as valid JavaScript. For example, if a line ends in semi-colon, a variant with the semi-colon and one without can be added as JavaScript can handle both.

Proper spacing should be given between variables and symbols as given (`let a = 5`). The `hint` value is what's shown to the user when the test case fails. So add a statement accordingly. The `isCorrect` value can be left as `false`, because the initial state of all the test cases are false.
