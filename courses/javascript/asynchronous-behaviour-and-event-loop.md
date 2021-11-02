---
  title: "Introduction To Javascript"
  subheading: "Asynchronous Behaviour and Event Loop"
  next : "foreach-map-filter"
  prev: "arrow-functions"
  testCase : []
---

Javascript is a **Synchronous** **Single-Threaded Language**, which means it executes the code in a specific order (only one line of code can be executed at a particular time).

```js
console.log("first");
function sayHi(name) {
  console.log(`hello! ${name}`);
}
sayHi("John");
console.log("second");
```

So what will be the output of this?
the output is:-

```
first
hello! John
second
```

As I told you earlier, Javascript is **Synchronous** **Single-Threaded Language**, so here `console.log("first")` will be executed. After that, it will find the function `sayHi` and execute it, and at the end, `console.log("second")` will be executed, So this is how a javascript code is executed.

So the question arises what if there is a function in between or some code that takes some time to execute?
for example:-

```js
console.log("first");
function sayHi(name) {
  setTimeout(() => console.log(`hello! ${name}`), 1500);
}
sayHi("John");
console.log("second");
```

So if we go by the definition I have given above, first `console.log('first')` will be executed, then function `sayHi()` will be called and wait till the `setTimeout()` is resolved (here 1500ms) and after that `console.log('second')` will be executed

So if we go by the definition I have given above, first `console.log('first')` will be executed, then function `sayHi()` will be called and wait till the `setTimeout()` is resolved (here 1500ms) and after that `console.log('second')` will be executed. Now, the question arises what if there is a function in between or some code that takes some time to execute? It seems right here, but there is a problem here the code will be stuck for 1500ms (till `setTimeout()` is resolved), then the further code will be executed, this is a big problem, what if you are doing an API call and till the time it is resolved your App will be stuck, this will leave a bad impression to the user, and this is called, **thread blocking** or **blocking the main thread**.

So How to solve it?

We don't need to do anything here Javascript handle these situations on Its own whenever it encounters the code, which takes some time (`Asynchronous code`), it does not wait for that code, will be executed parallelly outside the main thread, and will wait till the main thread is free, confused? So let's go deep and understand what is happening behind the scene:-

## JS Engine and Call Stack

Every code in javascript run because of the javascript engine, and inside JS engine there is Call Stack where all code is executed, and the call stack, is also called as Main Thread

## WEB APIs

JS Engine does not have all the features inside it, it can't set a timer on its own, or it can't make a call to an external API, so it handles this with the help of some APIs which are called WEB APIs

So now consider the previous example, the output will be:-

```
first
second
hello! John
```

## Callback and Microtask queue

These two queues line up the callback functions, which are returned when the asynchronous task is completed.
Then why these two queues?
Actually, both of these queues are similar the only difference is of priority and the callback functions they store and priority Microtask queue stores the **Callbacks of fetch Promises & Mutation observer**, and the callback queue stores the **Callbacks of SetTimeout, DOM API's, etc**.

But they also differ in priority, priority for what?

Here comes the concept of **Event Loop**.

## Event Loop

It checks whether the Call Stack is empty and whether there is anything in the queues, and if there is any callback function in it will push it to the call stack. As soon as the function is pushed into the call stack it will be executed.
The event loop gives priority to the microtask queue, which means it checks if there is anything in the Microtask queue, and when the microtask queue is empty, it will check if there is something in the Callback queue if it finds something it will push its call stack.

And all these things will come together and make the javascript run.

## Try to solve this question

- what will be the output of the below code

```js
console.log("first");
const greet = (name) => {
  setTimeout(() => console.log(`Hello! ${name}`), 1500);
};
fetch(`https://api-getUserData.com`).then(() => {
  console.log("got the response from API");
}); //consider the response came after 500ms
console.log("second");
```
