---
title: "Introduction To Javascript"
subheading: "Comparisons"
next: "prototypes"
prev: "arithmetic-operators"
contentOnly: false
testCase: [
    {
        id: 1,
        case: ["true"],
        hint: "True",
        isCorrect: false
    },
    {
        id: 2,
        case: ["false"],
        hint: "False",
        isCorrect: false
    },
    {
        id: 3,
        case: ["true"],
        hint: "True",
        isCorrect: false
    },
    {
        id: 4,
        case: ["false"],
        hint: "False",
        isCorrect: false
    },
    {
        id: 5,
        case: ["false"],
        hint: "False",
        isCorrect: false
    },
]
---

We know many comparison operators from maths.

In JavaScript they are written like this:

- Greater/less than: `a > b`, `a < b`.
- Greater/less than or equals: `a >= b`, `a <= b`.
- Equals: `a == b`, please note the double equality sign `==` means the equality test, while a single one a `=` b means an assignment.
- Not equals. In maths the notation is ≠, but in JavaScript it’s written as `a != b`.

All comparison operators return a boolean value:

- `true` – means “yes”, “correct” or “the truth”.
- `false` – means “no”, “wrong” or “not the truth”.

---

### Example

```javascript
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)
```

A comparison result can be assigned to a variable, just like any value:

```javascript
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true
```

## String Comparison

In javascript, strings can also be compared. Strings are compared letter by letter. Note that cases are also compared. Lowercase values are greater than Uppercase, don't ask why ;)

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
}
```

## Comparison of different types

```javascript
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
}
```

In the example above, for comparison, string '2' is typecasted to number 2 and then compared with number 1. However, `alert( '01' === 1 );` returns `false`. This is because `===` is the strict comparison operator, which compares the type of the operands too.

## `undefined`, the incomparable

The value undefined shouldn’t be compared to other values:

```javascript
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

We get these results because:

- Comparisons (1) and (2) return `false` because `undefined` gets converted to `NaN` and `NaN` is a special numeric value which returns `false` for all comparisons.
- The equality check (3) returns `false` because `undefined` only equals `null`, `undefined`, and no other value.

---

## Complete the tasks below:

What will be the result for these expressions?

- 5 > 4
- "apple" > "pineapple"
- "2" > "12"
- "2" > 12
- 5 > undefined