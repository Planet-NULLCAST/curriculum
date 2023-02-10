---
title: "Introduction To Javascript"
subheading: "If Condition"
next: "arithmetic-operators"
prev: "logical-operators"
contentOnly: true
---

The `if(...)` statement evaluates a condition in parentheses and, if the result is `true`, executes a block of code.

```javascript
if (year == 2021) {
  console.log("That's correct!");
}
```

## The `else` clause

The `if` statement may contain an optional `else` block. It executes when the condition is falsy.

```javascript
if (year == 2021) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?"); // any value except 2021
}
```

---

## Complete the tasks below:

![](/courseassets/checkpositive.png)

- Create a program to find a number is positive or negative

![](/courseassets/largest.png)

- Create a Program to find the largest of Two numbers

![](/courseassets/largestthree.png)

- Create a Program to find the largest of Three numbers

![](/courseassets/oddoreven.png)

- Create a Program to find a number is odd or even

![](/courseassets/comparison.png)

- Create a Program to alert
  - when first number greater than second number return 1
  - when first number less than second number return -1
  - when both are equal return 0
