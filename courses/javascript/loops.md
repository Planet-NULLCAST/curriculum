---
title: "Introduction to Javascript Loops"
subheading: "For, while"
prev: "function"
next: "type-conversion"
contentOnly: false
testCase:
  [
    {
      id: 1,
      case: ["for(i=0 ; 1<=5 ; i++){"],
      hint: "Please re check the loop syntax and code formatting.",
      isCorrect: false
    },
    {
      id: 2,
      case: ["console.log('Hello');"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 3,
      case: ["}"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    }
  ]
---

Just imagine that we have a scenario that we have to print 1 to 10 in the console. How we do it ?
Normally we write the code like this

```javascript
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
console.log("6")
console.log("7")
console.log("8")
console.log("9")
console.log("10")
```
now this practice is not practical for all time such as they need upto print 1 to 1000 or 10000. The above code is very heavy and time consuming. so here we can write the code like this.

```javascript
for(i=0;i<=10;i++){
    console.log(i)
}
```
Now the above concept is called **loops**.
Loops are the set of code that iterates a statement depends on a condition.
Loops are handy, if you want to run the same code over and over again, each time with a different value.

### Parts of a loop
this is an example of a **for loop**
```javascript

for(initialization ; condition ; updation){
    statement 1 .....
    statement 2 .....
    ..................
    ...........
    ..............
    statement n
}
```
### Initialization
This is the first step of a loop and it executes onlye once. Here the loop declare and initialise the loop variable.

### Condition
After the Initialization loop check the condition. if the condition is true - the loop control passes to the statement block . And if the condition false the loop will be terminated.

### Statements
This is the common block of code that can be iterated each time.

### Updation
This is last stage of a loop. Here the loop update the loop variable - it may be increment or decrement. After this the control passed to the condition block.

## Different Loops
### for loop
```javascript
syntax-
for(initialization ; condition ; updation){
    statements
}

example - 
for(i=0 ; i <= 10 ; i++ )
{
    console.log(i)
}
```

### while loop
```javascript
syntax-
initialization
while(condition){
    statements
    condition
}


example - 
let i = 0;
while(i<=10){
    console.log(i);
    i++;
}
```
and there are many other concept in loops such as do while loop, nested loops and some type of break statements.


## Complete the task below

- write a **for loop** with loop variable **i** to print hello **10** times.

