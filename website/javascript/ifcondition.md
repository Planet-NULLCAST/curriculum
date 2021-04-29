---
title: "Introduction To Javascript"
subheading: "Interaction: alert, prompt, confirm"
next: ""
prev: "interaction"
testCase: [
			{
				id: 1,
				case: ["a=5;", "a=5"],
				hint: "a should have value of 5",
				isCorrect: false
			},
			{
                id: 2,
                case: ["if(a===5){","if(a===5)"],
                hint: "use if syntax",
                isCorrect: false
            },
            {
                id: 3,
                case: ["}"],
                hint: "use }",
                isCorrect: false
            }
		]
---

As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.

alert
This one we’ve seen already. It shows a message and waits for the user to press “OK”.

```javascript
alert("Hello");
```
