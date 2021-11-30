---
title: "Introduction To Javascript"
subheading: "Objects"
next: "prototypes"
prev: "comparisons"
contentOnly: false
testCase: [
	{
		id: 1,
		case: ["let user = {};", "let user = {}"],
		hint: "Defining the object user",
		isCorrect: false
	},
	{
		id: 2,
		case: [
			"user.name = 'Lionel'",
			"user.name = 'Lionel';",
			'user.name = "Lionel"',
			'user.name = "Lionel";',
			"user['name'] = 'Lionel'",
			"user['name'] = 'Lionel';",
			'user[''name''] = "Lionel"',
			'user[''name''] = "Lionel";',
			'user["name"] = ''Lionel''',
			'user["name"] = ''Lionel'';',
			'user["name"] = "Lionel"',
			'user["name"] = "Lionel";',
		],
		hint: 'Add property "name" with value "Lionel"',
		isCorrect: false
	},
	{
		id: 3,
		case: [
			"user.surName = 'Messi'",
			"user.surName = 'Messi';",
			'user.surName = "Messi"',
			'user.surName = "Messi";',
			"user['surName'] = 'Messi'",
			"user['surName'] = 'Messi';",
			'user[''surName''] = "Messi"',
			'user[''surName''] = "Messi";',
			'user["surName"] = ''Messi''',
			'user["surName"] = ''Messi'';',
			'user["surName"] = "Messi"',
			'user["surName"] = "Messi";',
		],
		hint: 'Add property "surName" with value "Messi"',
		isCorrect: false
	},
	{
		id: 4,
		case: [
			'user.noInternationTrophy = true',
			'user.noInternationTrophy = true;',
			"user['noInternationTrophy'] = true",
			"user['noInternationTrophy'] = true;",
			'user["noInternationTrophy"] = true',
			'user["noInternationTrophy"] = true;',
		],
		hint: 'Add property "noInternationalTrophy" with value true',
		isCorrect: false
	},
	{
		id: 5,
		case: [
			"user.name = 'Leo'",
			"user.name = 'Leo';",
			'user.name = "Leo"',
			'user.name = "Leo";',
			"user['name'] = 'Leo'",
			"user['name'] = 'Leo';",
			'user[''name''] = "Leo"',
			'user[''name''] = "Leo";',
			'user["name"] = ''Leo''',
			'user["name"] = ''Leo'';',
			'user["name"] = "Leo"',
			'user["name"] = "Leo";',
		],
		hint: 'Change the value of the name to "Leo"',
		isCorrect: false
	},
	{
		id: 6,
		case: [
			'delete user.noInternationTrophy',
			'delete user.noInternationTrophy;',
			"delete user['noInternationTrophy']",
			"delete user['noInternationTrophy'];",
			'delete user["noInternationTrophy"]',
			'delete user["noInternationTrophy"];',
		]
	}
]
---

`Objects` are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets `{…}` with an optional list of _properties_. A property is a “key: value” pair, where `key` is a string (also called a “property name”), and `value` can be anything.

An empty object (“empty cabinet”) can be created using one of two syntaxes:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

## Literals and Properties

A `property` has a key (also known as “name” or “identifier”) before the colon `:` and a value to the right of it.

```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 23        // by key "age" store value 23
};
```

In the `user` object, there are two properties:

1. The first property has the name `name` and the value 'John'.
2. The second one has the name `age` and the value 23.

We can add, remove and read files from it any time.

Property values are accessible using the `dot` notation:

```javascript
// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 23
```

The value can be of any type. Let’s add a boolean one:

```javascript
user.isAdmin = true;
```

To remove a property, we can use `delete` operator:

```javascript
delete user.age;
```

We can also use multiword property names, but then they must be quoted:

```javascript
let user = {
  name: "John",
  age: 23,
  "likes birds": true  // multiword property name must be quoted
};
```

## Square brackets

For multiword properties, the `dot` access doesn’t work. There’s an alternative “square bracket notation” that works with any string:

```javascript
// this would give a syntax error
user.likes birds = true

// correct
user["likes birds"] = true;

// alternate way
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
console.log(user[key]); // true
console.log(user.key); // undefined since user doesn't have the property key
```

## Computed Properties

We can use square brackets in an object literal, when creating an object. That’s called computed properties.

For instance:

```javascript
let key = 'email';

let user = {
	name: 'John',
	age: 23,
	[key]: 'john@example.com'
}

console.log(user.email); // john@example.com
```

## Property value shorthand

```javascript
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

let user = makeUser("John", 23);
console.log(user.name); // John
console.log(user.age); // 23
```

## Property existence test, `in` operator

Reading a non-existing property just returns undefined. So we can easily test whether the property exists. Just comparing the property value with undefined will tell you whether the property exists in that particular object or not. However, there's a special operator `in` which does the exact thing and makes our lives easier:

```javascript
let key = 'age';
console.log('name' in user); // true
console.log(key in user); // true
console.log('key' in user); // false
```

Why `in`? Consider the following example:

```javascript
let test = {
	key: undefined
}

console.log(test.key !== undefined); // false
console.log('key' in test); // true
```

Here, the object `test` does have the property key. But comparing `test.key` with undefined implies that `test` doesn't have the property `key`. That is not true. Using the `in` operator, we get the expected result.

## The for...in loop

To walk over all keys of an object, there exists a special form of the loop: `for..in`. This is a completely different thing from the `for` loop construct that we studied before.

The syntax, followed by an example:

```javascript
for (key in object) {
  // executes the body for each key among object properties
}

let user = {
	name: 'John',
	age: 23,
	isAdmin: true
}

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 23, true
}
```

---

## Complete the tasks below:

- Create an empty object `user` using `let`.

- Add the property `name` with the value 'Lionel'.

- Add the property `surname` with the value 'Messi'.

- Add the property `noInternationalTrophy` with the value `true`.

- Change the value of `name` to 'Leo'.

- Change the value of `noInternationalTrophy` to `false`. 

- Remove the property `noInternationalTrophy` from the object.
