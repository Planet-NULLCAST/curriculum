---
title: "UI Mastery"
subheading: "SCSS"
next: "ui-debug-tools"
prev: "sass"
contentOnly: true
---

# SCSS Introduction

SCSS stands for **Sassy Cascading Style Sheets**. SCSS is a preprocessor of CSS; it helps us to write CSS codes much easily. CSS is the styling language that browser understands and uses to style webpages. SCSS is a special type of file for SASS, a program written in Ruby, that assembles CSS style sheets for a browser. SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster. SCSS files are processed by the server running a web app to output a traditional CSS that the browser can understand.

The syntax of SCSS can be written faster than CSS. With nesting the syntax is better to read and easier to change code using variables.

#### Sample code CSS:

```
header {
    margin: 0;
    border: 1px solid red;
}
header p {
    font-size: 12px;
    font-weight: bold;
    color: red;
}
header a {
    text-decoration: none;
}
```

#### Sample code SASS:

```
$color: red
header
    margin: 0
    border: 1px solid $color
p
    color: $color
    font:
    size: 12px
    weight: bold
a
    text-decoration: none
```

#### Sample code SCSS:

```
$color: red;
header {
    margin: 0;
    border: 1px solid $color;
p {
    color: $color;
    font: {
    size: 12px;
    weight: bold;
    }
}
    a {
    text-decoration: none;
    }
}
```

SCSS can be separated by a semicolon and can run on the same line. SCSS is fully compatible with the syntax of CSS, while still supporting the full power of Sass.

### Variables

Variables can be used to store information which can be reused throughout the stylesheet.

#### SCSS

```
$font-family:    Helvetica, sans-serif;
$color: #333;
header {
    font: 100% $font- family;
    color: $color;
}
```

#### CSS

```
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}
```

### Nesting

Sass will let us nest our CSS selectors in a way that follows the same visual hierarchy of its HTML.

#### SCSS

```
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li { display: inline-block; }
    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
       }
}
```

#### CSS

```
nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
nav li {
    display: inline-block;
}
nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
}
```

### Modules

We can split the file using @use rule. This rule loads another Sass file as a module.

#### SCSS

```
$font-family:    Helvetica, sans-serif;
$color: #333;
header {
    font: 100% $font- family;
    color: $color;
}
@use 'base';
.nav {
    background-color: base.$color;
    color: white;
}
```

#### CSS

```
header {
    font: 100% Helvetica, sans-serif;
    color: #333;
}
.nav  {
    background-color: #333;
    color: white;
}
```

### Mixins

A mixin lets us make groups of CSS declarations.

#### SCSS

```
@mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

#### CSS

```
.box {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
}
```

To create a mixin use the @mixin directive and give it a name. Then it can be used as a CSS declaration starting with @include followed by the name of the mixin.

### Extend/Inheritance

Using @extend lets us share a set of CSS properties from one selector to another. In the example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep our compiled CSS neat and clean.

#### SCSS

_This CSS will print because %extended-style is extended. _

```
%extended-style {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}
h1 {
    @extend %extended-style;
}
h2 {
    @extend %extended-style;
    border-color: green;
}
h3 {
    @extend %extended-style;
    border-color: red;
}
```

#### CSS

_This CSS will print because %message-shared is extended._

```
h1, h2, h3 {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}
h2 {
    border-color: green;
}
h3 {
    border-color: red;
}
```

### Operators

Sass has a handful of standard math operators like +, -, \*, /, and %.

#### SCSS

```
.container {
    width: 100%;
}
.sidebar {
    float: left;
    width: 600px / 960px * 100%;
}
.content-container {
    float: right;
    width: 300px / 960px * 100%;
}
```

#### CSS

```
.container {
    width: 100%;
}
.sidebar {
    float: left;
    width: 62.5%;
}
.content-container {
    float: right;
    width: 31.25%;
}
```
