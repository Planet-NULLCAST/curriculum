---
title: "Introduction To Javascript"
subheading: "Hello World!"
next: "variables"
prev: "introduction"
contentOnly: false
testCase: [
			{
				id: 1,
				case: ["console.log('Hello World!');", "console.log('Hello World!')"],
				hint: "add console.log() to with 'Hello World!' in it.",
				isCorrect: false
			}
		]
---

In this section we are going to see how you can execute **JavaScript** code on browser.

<br />

**There are two main ways to execute JavaScript on browser.**

### 1. `script` Tag

Using a `script` tag, we can run JavaScript within an HTML file. The browser JavaScript engine will take this section and execute it on its own. When a browser encounters a script tag, the browser will immediately stop the parsing of HTML and wait for the fetching and executing of the JavaScript code. This is because JavaScript code will sometimes add or manipulate DOM elements. In order to display that manipulation, the browser needs to block the parsing and would only proceed after the code is executed. So traditionally developers will put the script tag after the body, so that the browser can execute it after the HTML is fully parsed.

```HTML
<head>
...
</head>
<body>
...
<script>
console.log("hi");
</script>
</body>
```
<br/>

But HTML5 introduces 2 attributes that help us to define when we want to execute our code.
<br/><br/>
#### 1. [`defer`](https://www.w3schools.com/tags/att_script_defer.asp)

It is used to tell the browser to only execute the code when the browser is fully parsed and you can put in any section of HTML and it will not block HTML parsing.

```HTML
<head>
<script defer>
console.log("hi");
</script>
...
</head>
<body>
...
</body>
```
<br/>

#### 2. [`async`](https://www.w3schools.com/tags/att_script_async.asp)

This attribute helps our code to execute asynchronously. That means the script that uses an `async` attribute will execute alongside with the parsing of HTML without blocking it. This will be very helpful when we need to run a pre script in order to run our main script.

```HTML
<head>
<script async>
console.log("hi");
</script>
...
</head>
<body>
...
</body>
```

### 2. Linking external files.

This is the go-to method when writing medium to large applications. This method allows the developers to isolate JavaScript and HTML.
<br/><br/>
The attributes discussed above are also applicable with this.

```HTML
<head>
<script src="demo_defer.js" async></script>
...
</head>
<body>
...
</body>
```

---

## Complete the task below:

- Add `console.log("Hello World!")` to code editor.
