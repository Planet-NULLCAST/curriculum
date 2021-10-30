---
title: "Introduction To Javascript"
subheading: "Class"
prev: "arrow-functions"
next: ""
testCase: [
    {
      id: 1,
      case: ["class Calcu {"],
      hint: "Please re check the class syntax and code formatting.",
      isCorrect: false
    },
     {
      id: 2,
      case: ["constructor(num1){"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 3,
      case: ["}"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 4,
      case: ["toAdd(num2) {"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 5,
      case: ["return this.num1 + num2;"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 6,
      case: ["}"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 7,
      case: ["}"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 8,
      case: ["let calcuObjects = new Calcu(1);"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
     {
      id: 9,
      case: ["const calcuNum2 = calcuObjects.toAdd(2);"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
    {
      id: 10,
      case: ["console.log(concatData);"],
      hint: "Please re check the code and formatting.",
      isCorrect: false
    },
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

## Constructor
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
        
        // this is the same one from class
        console.log(this.name);

        // the name is from the params
        console.log('data from params '+ name); 
    }
}

let textClassObjects = new TestClass('Ducks');

```
In the above example, 'this.name' is used to access the name variable on the class named 'TestClass'. And the 'name' variable is the same variable we need as params in our constructor.

* Please note that they are actually called methods not variables. But for the simple understanding we just called them variables.
***
## Methods
Just like we use variables and constructor in our class. We can also create functions too. We called then methods. They looks like a function and act like one for the most part.

For example:

```javascript

class TestClass {

    constructor(name){
    
        this.stringOne = name
    }

    toConcatStrings(stringTwo) {

        return this.stringOne + stringTwo

    }
    
}

let textClassObjects = new TestClass('Nullcast');

const concatData = textClassObjects.toConcatStrings(' Ducks')

// result: Nullcast Ducks
 console.log(concatData); 

```

In the above example, we create a class and it has a method named toConcatStrings. In the constructor of that class, you can see we have a param named name and we initialize that value to this.stringOne. But if you take look at the class you can see we didn't declare any variables or method named stringOne. Don't worry it will not cause an error a new method named stringOne will be created for our class.

You can see we called our method outside of our class by `const concatData = textClassObjects.toConcatStrings(' Ducks')`. By this, we can point out that we can call the method named **toConcatStrings** on the class **textClassObjects**.

## Complete the task below
- create a class named Calcu
- create a constructor with params as num1
- make an object name num1 using this keyword and insert the above num1 param to it.
- make a method name toAdd which have a param named num2
- it should return the the addition of method num1 and num2 from the param.
- create an object named calcuObjects of the above class and pass value as 1.
- now call the method toAdd and pass value as 2 and get the return value to a variable named calcuNum2
-  Then console log calcuNum2 value.
