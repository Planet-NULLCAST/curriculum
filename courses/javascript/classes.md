---
title: "Introduction To Javascript"
subheading: "Class"
prev: "arrow-functions"
next: ""
testCase: [
           
]
---

A javascript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.
Javascript supports classes from ES6 own words. Before that, Javascript doesn't have any concept of classes. To mimic the class we often used the constructor/prototype pattern.

## Class Declaration

We can declare a class by using the class keyword. For example: 

```javascript

// Declaring class 
class TestClass {}

// create object of the class
let textClassObject = new TestClass();

```

In the above example, the TestClass is the class and `let textClassObject = new TestClass();` is where the we create an object named textClassObject for the TestClass.

You can see there is a new keyword used on creating the object of the class. It is used to create a new instance of the TextClass.


```javascript

console.log(textClassObject instanceof TestClass);
// will return true.
```

When you are dealing with classes you also need to think that class declarations are not hoisted.  This means that you can create an object of the class before initializing it.

```javascript
let textClassObjects = new TestClass(); //ReferenceError

class TestClass {}

```

### Constructor
The constructor method is a special method inside the class for creating and initializing an object in a class. Javascript automatically calls the constructor method when you initialize an object of the class.

```javascript
class TestClass {

    constructor(){
        console.log("constructor is called");
    }
}

let textClassObjects = new TestClass();

```

The constructor will be called when you created the object named **textClassObjects**.

You can also pass data through the constructor just like a function.

```javascript

class TestClass {

    constructor(name){
        console.log(`this is the passes data ${name}`);
    }
}

let textClassObjects = new TestClass("nullcast");

```
* Please note that you can only create one constructor in a class.
***
### this keyword
In JavaScript this keyword refers to the object it belongs to.

We will have some examples of **this** in **classes**.

```javascript

class TestClass {

    name = 'nullcast'

    constructor(name){
        
        console.log(this.name);

        console.log('data from params '+ name);
    }
}

let textClassObjects = new TestClass('Ducks');

```
