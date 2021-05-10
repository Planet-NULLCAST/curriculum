## Writing a Chapter

Each course folder should be added under `/website/courses/`. Chapter content is written as an md file under the corresponding course folder. For eg, the list of chapters under the JavaScript course will be under `/website/courses/javascript/` as md files. File name should be the chapter name. For eg, if the chapter's name is "If Condition", the file name should be `if-condition.md`. Few example chapters are present.  
**Note** that, once you add the chapter, you have to update the details in `/website/courses/meta.js`.

```javascript
//meta.js

let courses = [
	{
		name: "javascript",
		chapters: [
			{
				id: 1,
				url: "introduction",
				linkTitle: "Introduction"
			},
			{
				id: 2,
				url: "hello-world",
				linkTitle: "Hello World"
			},
			{...}
		]
	}
];

```

`name` is the name of that particular course. `id` specifies the order of the chapters, `url` should be the file name and `linkTitle` the chapter name.

**General structure of a chapter md file is as follows:**

```
//chapter-name.md
---
title: "Course Title"
subheading: "Chapter Title"
next: "File name of the next chapter"
prev: "File name of the previous chapter"
testCase: [
			{
				id: 1,
				case: ["case"],
				hint: "hint message",
				isCorrect: false // leave this as false
			}
		]
---

// chapter content
Eg: The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

---

Complete the tasks below:

- task 1
- task 2 etc

```

The chapter content can be placed between the line breaks of front matter and tasks as given above.

## Writing test cases for the chapter

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
