---
  title: "Introduction To Javascript"
  subheading: "Asyncronous Behaviour and Event Loop"
  next : ""
  prev: "Arrow Function"
  testCase : []
---

Javascript is a **Synchronous** **Single Threaded Language**, which means it executes the code in a specific order and only one line of code can be executed at a particular time.

```js
console.log("first");
function sayHi(name) {
  console.log(`hello ! ${name}`);
}
sayHi("John");
console.log("second");
```

So what will be the output of this ?
the output is:-

```
first
hello ! John
second
```

As I told earlier Javascript is **Synchronous** **Single Threaded Language** , so here `console.log("first")` will be executed after that it will find the function `sayHi` will be called and at end `console.log("second")` will be executed, So this is how a javascript code is execucted.

So the question arrises what if there is a function in between or some code which takes sometime to execute ?
for example:-

```js
console.log("first");
function sayHi(name) {
  setTimeout(() => console.log(`hello ! ${name}`), 1500);
}
sayHi("John");
console.log("second");
```

So if we go by the the defination I have given above, first `console.log('first')` will be executed then function `sayHi()` will be called and wait till the `setTimeout()` is resolved (here 1500ms) and after that `console.log('second')` will be executed

It seems right here but there is a problem, here the code will be stuck for 1500ms(till `setTimeout()` is resolved) then the further code will be executed this actually is very big problem what if you are doing an API call and till the time it is resolved your App will be stuck and this will leave a bad impression to the user, and this is called **thread blocking** or **blocking the main thread**.

So How to solve it ?

Actually we don't need to do anything here Javascript handle these situation on it's own, whenever it encounter the code which takes some time (`Asynchronous code`) it does not wait for it that code will be executed paralley outside the main thread and will wait till the main thread is free , confused ??, So let's go deep and understand what happen behind the scene:-

## JS Engine and Call Stack

Every code in javascript run beacuse of javascript engine and inside JS Engine there is Call Stack where all code are executed and this call stack is also called as Main Thread

## WEB APIs

JS Engine does not have all the features inside it like it cant set a timer on it's own or it can't make a call to an External API it can handle this with the help of some apis which are called WEB APIs

and these things together comes in the browser and thats how we can execute javascript code in browser
