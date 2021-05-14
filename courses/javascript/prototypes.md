---
title: "Introduction To Javascript"
subheading: "Prototypes"
prev: "arithmetic-operators"
next: "function"
testCase: [
			{
				id: 1,
				chapterName: "prototypes",
				case: ["function Student(name, department) {"],
				hint: "Define constructor Student",
				isCorrect: false
			},
			{
                id: 2,
                case: ["this.name = name","this.name = name;"],
                hint: 'Assign parameter name to property name',
                isCorrect: false
            },
            {
                id: 3,
                case: ["this.department = department","this.department = department;"],
                hint: "Assign parameter name to property name",
                isCorrect: false
            },
            {
                id: 4,
                case: ["}"],
                hint: "Closing curly braces",
                isCorrect: false
            },
            {
                id: 5,
                case: ["let student = new Student('Elon', 'ME')", "let student = new Student('Elon', 'ME');", "const student = new Student('Elon', 'ME')", "const student = new Student('Elon', 'ME');"],
                hint: "Create new variable student of type Student",
                isCorrect: false
            },
            {
                id: 6,
                case: ["Student.prototype.isCSEstudent = function () {"],
                hint: "Prototype declaring",
                isCorrect: false
            },
            {
                id: 7,
                case: ["return this.department === 'CSE'", "return this.department === 'CSE';"],
                hint: "Prototype definition",
                isCorrect: false
            },
            {
                id: 8,
                case: ["}"],
                hint: "Closing curly braces",
                isCorrect: false
            },
		]
---

In this section, we'll look into the various useful Object prototypes.

## Intoduction

I assume you've already learned about Javascript Objects. Technically speaking, `prototype` is a special kind of iterable object attached to an object. Let's clarify things with an example.

```js
const obj1 = {
  a: 1,
  b: 2,
};
```

For this object, the visible properties are `a` and `b`. But behind the scenes, Javascript attaches a `prototype` property. The properties inside this `prototype` object is shared accross every object. Let's quickly declare another object.

```js
const obj2 = {
  a: 3,
};
console.log(obj1.a); // 1
console.log(obj2.a); // 3
console.log(obj1.b); // 2
console.log(obj2.b); // undefined
```

Here, `obj1` and `obj2` are of the same type, i.e., Object. `obj2` doesn't have the property `b`. Consider the case you want a property to have the same value accross all objects. In this case, let's say from now on, every object I create should have the property b with the value `2`. How will you solve the riddle? The answer is **`prototype`**.

```js
Object.prototype.b = 2;
console.log(obj2.b); // 2
```

Tadaa! From now on, every Object you create will have the property `b` with the value `2`. Dumb, isn't it? Who wants every object they create with the same value to a property, right? Well, you're wrong. See how, in the next section.

## Dive deeper

The most powerful use of prototypes is defining functions as prototypes. Yes! Defining a function is life saver. Let's consider a real life example. Let's say the PCs we use. All PCs have different configuration inside and outside, but their purpose is to make our coding life easier isn't it ;) ? So they share the same purpose while having different properties. This same purpose is our `prototype`. Now let's see a more technical example.

```js
function Human(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const human1 = new Human("Bob", "Smith");
const human2 = new Human("Daisy", "Johnson");
```

Here, we declared a `constructor`, which can be used to create variables of type `Human`, and defined two variables, `human1` and `human2`. Getting the full name of a human is really simple right? `human1.firstName + ' ' + human1.lastName` seems really easy. But wait. There's an even more easier way!.

```js
Human.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(human1.fullName()); // Bob Smith
console.log(human2.fullName()); // Daisy Johnson
```

See? That's the magic of prototypes!. Now let's see what are `object prototypes`.

## Javascript provided prototypes

Well, to make life more easier, Javascript have provided us many life saver prototypes which helps us to achieve one-line codes. You see, Javascript is a heavily Object Oriented Programming Language. Everything in Javascript revolves around object. `Array`, `Date`, and even Functions are variants of Objects, with added prototypes and properties. Let's take a look at some of the useful ones

- **`Array.prototype.push()`** - Takes 1 or more arguments, which will be pushed to the end of the array.

```js
let a = [1];
a.push(2, 3);
console.log(a); // [ 2, 3 ]
```

- **`Array.prototype.sort()`** - Takes an optional compare function as argument, and returns a sorted array, where sorting order is determined by the compare function. Default comparison will be string comparison.

```js
a.sort((a, b) => b - a); // compare function compares each elements with the given function,
console.log(a); // [ 3, 2, 1 ]
```

- **`Array.prototype.slice()`** - Takes two optional arguments start and end. Default value of start and end will be 0 and length of the array. Returns a new array with items along the start to end of original array. The original array is **kept intact**.

```js
console.log(a.slice()); // [ 3, 2, 1 ]
console.log(a.slice(0, 2)); // [ 3, 2 ]
```

- **`Array.prototype.forEach()`** - Loops through the elements of the array, execute the callback function, which is provided as the argument, for the entire items of the array, one by one.

```js
a.forEach((item) => {
  console.log(item);
});
/*
Output- 
3
2
1
*/
```

- **`Array.prototype.map()`** - Maps(Loops) through the elements of the array, executes the callback function, which is provided as the argument, for the entire items of the array, one by one, and returns a new array which will have the modified values. The original array is **kept intact**.

```js
console.log(
    a.map(item => {
        return item * 10;
    })
); // [ 30, 20, 10 ]
console.log(a); // [ 3, 2, 1 ]
*/
```

- **`Array.prototype.filter()`** - Filters the specific elements out of an array. The filtering process is dictated by the callback function. If the callback returns false, the element is filtered out. The original array is **kept intact**.

```js
console.log(
    a.map(item => {
        return item % 2 === 0; // filters even values
    })
); // [ 2 ]
console.log(a); // [ 3, 2, 1 ]
*/
```

- **`Array.prototype.reduce()`** - Reduces the array to a single value. It's easier to explain with an example of finding the sum of all elements in array `a`. The original array is **kept intact**.

```js
console.log(
    a.reduce((item1, item2) => {
        return item1 + item2; /* first two elements of array is added
                             in the first iteration. For the next iteration,
                             their sum is passed as first argument, and
                             third element of array as second argument*/
    })
); // 6
console.log(a); // [ 3, 2, 1 ]
*/
```

So I hope you enjoyed this little section here. Take a break if you need warrior. Or you can hop in to the next section :) .

---

## Complete the tasks below:

- Create a new constructor function Student, which accepts name and departments as params and assign to the object

- Declare a variable student of type Student, where name is Elon and 'department' is 'ME'

- Define a new prototype isCSEstudent for Student, which is a function returning a boolean value, which will be true if the student is from department 'CSE'
