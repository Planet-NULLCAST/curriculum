---
title: "UI Mastery"
subheading: "JS Basics"
next: "learn-css-flexbox-and-media-queries"
prev: "naming-standard-bem"
contentOnly: true
---

# JS

## Introduction

Alongside with HTML and CSS, JavaScript is one of the essential technologies of web documents. It is the one that makes the app interactable.

### Datatypes

In JavaScript there are 6 primitive datatypes.

#### Undefined

A variable that has not been assigned a value has the value undefined.

#### Null

The Null type has exactly one value: null. It refers to the absence of a value.

#### Boolean

Boolean represents a logical entity and can have two values: true and false.

#### Number

Number represents numeric values eg: 11

#### String

It is used to represent textual data. eg: 'Hey developer'

#### Symbol

A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

### Objects

Objects are nothing but an informtaion or data. These are the foundation of JavaScript. In JavaScript, an object can be thought of as a distinct entity that can have properties associated with it. These properties define the object’s characteristics and behavior.

[Read more](https://blog.bitsrc.io/the-chronicles-of-javascript-objects-2d6b9205cd66)

### Events

Events are actions or occurence that happen in the system.For example, clicking a button or pressing a key are events. We can use JavaScript to execute code in response of these events. Every HTML contains a set of events which can trigger JavaScript code.

#### onclick

It is a mouse event that occurs when a user clicks on a button (or any element). We can add a logic against this event type.

```
<!doctype html>
<html>
<head>
<script>
function submit() {
alert('Button clicked');
}
</script>
</head>
<body>
<button type="button" onclick="submit()">Click me</button>
</body>
</html>
```

In the above example, when a user clicks on the button `Click me`, then a function defined for the onclick event(submit()) is executed.

#### onsubmit

This event occurs when we submit a form.

#### Onmouseover

This event triggers when we hover the mouse pointer on any element.

#### onfocus

This event triggers when an element gets focus.

[Know more about events](https://www.tutorialspoint.com/javascript/javascript_events.htm)

#### Mastering:

[ES6 for everyone](https://es6.io/)

[Foundations of JavaScript](https://frontendmasters.com/courses/javascript-foundations/)

#### Try this:

[Explore objects](https://sdras.github.io/object-explorer/)
