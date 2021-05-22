---
title: "Type conversions in Javascript"
subheading: "Type conversion"
next: ""
prev: ""
testCase: [
    {
        id: 1,
        case: ["const a = '45', b = '32';", "const a = '45', b = '32'","const a = '45'; const b = '32';", "const a = \"45\", b = \"32\";", "const a = \"45\", b = \"32\"","const a = \"45\"; const b = \"32\";"],
        hint: "a should have a value of \"45\" or '45' and b should have a value of \"32\" or '32'",
        isCorrect: false
    },
    {
        id: 2,
        case: ['const sum = a + b;'],
        hint: "sum should store the result of performing an ADD operation on the numb",
        isCorrect: false
    },
    {
        id: 3,
        case: ["const result = Number(sum);"],
        hint: "Please re check the code and formatting.",
        isCorrect: false
    }
]
---

Type conversions (also known as type casting) is a method of changing an entity from one data
type to another.

---

## Type conversions in JavaScript

Type conversion in javascript can be done either by javascipt itself (instrinsic type converion), or
by the use of some javascript function. 

## Converting dates, numbers and boolean to string

To convert to string the global method String(), or toString() method can be used as 
illustrated below:

---

For converting number into string

```javascript
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
```

---

The same functionality is achieved by the number method toString(). For example:

```javascript
x.toString()           // returns a string from a number variable x
(123).toString()       // returns a string from a number literal 123
(100 + 23).toString()  // returns a string from a number from an expression
```
---

For converting boolean into string

```javascript
String(false)      // returns "false"
String(true)       // returns "true"
```

Same functionality can be achieved using the boolean method toString() as shown below.

```javascript
false.toString()   // returns "false"
true.toString()    // returns "true"
```

---

For converting date into string
```javascript
String(Date())    // returns "Mon May 17 2021 17:56:43 GMT+0530 (India Standard Time)"
```

We can also use the date method toString() for converting into string.

```javascript
Date().toString() // returns "Mon May 17 2021 17:56:43 GMT+0530 (India Standard Time)"
```

## Converting string to numbers

The global method Number() can convert strings to numbers.

Strings containing numbers (like "3.14") convert to numbers 
(like 3.14).

Empty strings convert to 0.

Anything else converts to NaN (Not a Number).

For example

```javascript
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN
```

## Boolean Conversion

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become **true**.

Explicit conversions to boolean can be done with the help of Boolean() method. For example:

```javascript
Boolean(1)      // returns true
Boolean(0)      // returns false
Boolean("")     // returns false
```


## Examples of intrinsic type conversion

```javascript
"$" + 4 + 5       // returns $45
"6" / "2"         // returns 3
```

## Complete the task below

- Create two variables a and b and assign values "45" and "32" respectively.

- Perform an addition(+) operation on a and b and assign the value to a variable sum.

- Perform a type conversion operation on variable sum using the Number() method of javascript and store the result into variable result.
