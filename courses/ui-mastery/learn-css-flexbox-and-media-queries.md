---
title: "UI Mastery"
subheading: "Learn CSS Flexbox And Queries"
next: "bootstrap-basics"
prev: "js-basics"
contentOnly: true
---

The Flexible Box Layout, makes it easier to design flexible responsive layout structure without using float or positioning. The purpose of this document is to find better way to learn and practice FlexBox & Media Queries one by one properties with examples.

#### Flexbox Properties

To use the Flexbox model, you must make a parent element a flex container

Flex container : we use display: flex || inline-flex, as parent this parent flex container have these properties==> Flex-direction || Flex-wrap || Flex-flow || Justify-content || Align-items || Align-content along with these there are many sub properties have in CSS we can call it Flex items that means children elements within a Flex container will explain later first of all we are going to look flex container.

#### | Flex Container

#### Flex Display

Flex-display default direction will be horizontal(flex-direction:row) that means left to right

**HTML**

```
<div class="div-flex">
    <div class="card"></div>
    <div class="card"></div>
     <div class="card"></div>
 </div>
```

**CSS**

```
.div-flex{
    display: flex;
}
.card{
    background: #e0892e;
    height: 50px;
    width: 20%;
    border: 1px solid white;
}
```

#### 1.Flex-direction

The Flex-direction property controls the direction in which the flex-items are laid along the main axis.

**HTML**

```
<div class="div-flex">
    <div class="card"></div>
    <div class="card"></div>
     <div class="card"></div>
 </div>
```

**CSS**

```
.div-flex{
    display: flex;
    flex-direction:column;
}
.card{
    background: #e0892e;
    height: 50px;
    width: 20%;
    border: 1px solid white;
}
```

You can change flex-direction: row || column || row-reverse || column-reverse; values and see the difference

#### 2.Flex-wrap

The Flex-wrap property wrapping the div inside the parent flex-container. Flex-wrap property defaults to nowrap;

**HTML**

```
<div class="div-flex">
    <div class="card"></div>
    <div class="card"></div>
     <div class="card"></div>
 </div>
```

**CSS**

```
.div-flex{
    display: flex;
    flex-wrap:wrap;
}
.card{
    background: #e0892e;
    height: 50px;
    width: 50%;
    border: 1px solid white;
}
```

You can change flex-wrap: wrap || nowrap || wrap-reverse
values and see the difference

#### 3.Flex-flow

The Flex-flow property shorthand property that means flex-direction and flex-wrap properties we can add in single line

**HTML**

```
<div class="div-flex">
    <div class="card"></div>
    <div class="card"></div>
     <div class="card"></div>
 </div>
```

**CSS**

```
.div-flex{
  display: flex;
  flex-flow:row wrap;
}
.card{
  background: #e0892e;
  height: 50px;
  width: 50%;
  border: 1px solid white;
}
```

You can change flex-flow: row wrap || column wrap || column-nowrap
values and see the difference

#### 4.Justify-content

The justify content property defines how flex items are laid out on the main axis.

**HTML**

```
<div class="div-flex">
    <div class="card"></div>
    <div class="card"></div>
     <div class="card"></div>
 </div>
```

**CSS**

```
.div-flex{
    display: flex;
    justify-content:space-between;
}
.card{
    background: #e0892e;
    height: 50px;
    width: 20%;
    border: 1px solid white;
}
```

You can change justify-content: flex-start|| flex-end|| center || space-between || space-around; values and see the difference

#### 5.Align-items

The If you learn justify-content this will be easier both are same logical idea but justify-content working as parent align-items are working as child

**HTML**

```
<div class="div-flex">
    <div class="card"></div>
 </div>
```

**CSS**

```
.div-flex{
  display: flex;
  justify-content:center;
  align-items:center
}
.card{
  background: #e0892e;
  height: 50px;
  width: 20%;
  border: 1px solid white;
}
```

You can change align-items: flex-start|| flex-end|| center || stretch || baseline; values and see the difference

#### 6.Align-content

It helps to align a flex container’s lines within it when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

Properties: align-items: flex-start|| flex-end|| center || stretch || baseline;

[Click here and try it yourself](https://codepen.io/HugoGiraudel/embed/1caa1ef0857a023d0561b5223abef75d?height=370&type=result&href=1caa1ef0857a023d0561b5223abef75d&user=HugoGiraudel&safe=true&slug-hash=1caa1ef0857a023d0561b5223abef75d&default-tab=result&animations=run&name=cp_embed_1#result-box)

#### || Flex Items

We learned flex-container properties next we are move on flex items. Flex items like flex-containers, a couple alignment properties are also made available on all flex-items, too. these are the properties==> order || Flex-grow|| Flex-shrink|| flex-basis

#### 1.Order

    The order property allows for reordering the flex items within a container. The re-ordering is based on the positions in the source file, when two or more flex items have the same order value.

**HTML**

```
<div class="flex-container">
        <div class="item1">1</div>
        <div class="item2">2</div>
        <div class="item3">3</div>
    </div>
```

**CSS**

```
    .flex-container {
        height: 200px;
        width: 300px;
        font-size: 32px;
        border: 1px solid black;
        display: flex;
    }
    .flex-container div {
        width: 100px;
    }
    .item1 {
        background: #e84d51;
        order: 2;
    }
    .item2 {
        background: #7ed636;
        order: 3;
    }
    .item3 {
        background: #2f97ff;
        order: 1;
    }
```

#### 2.Flex-grow and Flex-shrink

    The flex-grow and flex-shrink properties control how much a flex-item should “grow” (extend) if there are extra spaces, or “shrink” if there are no extra spaces.

    By default, the flex-grow property is set to 0. By implication, the flex-item does NOT grow to fit the entire space available. However, if you changed the flex-grow value to 1, here's what happens.

**HTML**

```
<div class="container">
		<div class="item">Item 1</div>
		<div class="item">Item 2</div>
		<div class="item">Item 3</div>
		<div class="item">Item 4</div>
</div>
```

**CSS**

```
.container {
	height: 400px;
	display: flex;
}
.item {
	color: #fff;
	margin: 5px;
	background: #3db5da;
	flex-grow: 1;
	display: flex;
  align-items: center;
	justify-content: center;
	}
```

#### 3.Flex-basis

The flex-basis property specifies the initial size of a flex-item. Before the flex-grow or flex-shrink properties adjust it's size to fit the container or not.

The default value is flex-basis: auto. Flex-basis can take on any values you'd use on the normal width property. That is, percentages || ems || rems || pixels etc

**HTML**

```
<div class="container">
  <div class="demo">
    <h2>Test One</h2>
  </div>
  <div class="demo1">
    <h2>test two</h2>
  </div>
</div>
```

**CSS**

```
.container {
  display: flex;
  max-width: 900px;
}
.demo {
  background:red;
  flex-grow: 2;
  flex-basis: 400px;
}
.demo1 {
  background:green;
  flex-grow: 1;
  flex-basis: 200px;
}
```

#### 4.The flex shorthand

The flex shorthand allows you set the flex-grow, flex-shrink and flex-basis properties all at once.

Please note the order.
Flex-grow first, then flex-shrink, and then flex-basis.

![flex shorthand](/flex-short.jpeg)

#### 5.Align-self

The align-self property takes a step further in giving us so much control over flex items. You already saw how the align-items property helps in collectively aligning all flex-items within a flex-container.

It may take on any of these values: auto || flex-start || flex-end || center || baseline || stretch

[Click here and try it yourself](https://codepen.io/machal/pen/OXWKwe)

[Click here and play the game](https://flexboxfroggy.com/)
[Click here and watch tutorial on youtube](https://www.youtube.com/watch?v=JJSoEo8JSnc)

#### Media Queries

The layout changes based on the size and capabilities of the device. For example, on a phone users would see content shown in a single column view; a tablet might show the same content in two columns. A multitude of different screen sizes exist across phones, "phablets," tablets, desktops, game consoles, TVs, and even wearables. Screen sizes are always changing, so it's important that your site can adapt to any screen size, today or in the future. In addition, devices have different features with which we interact with them.

#### Set the viewport

Pages optimized for a variety of devices must include a meta viewport tag in the head of the document. A meta viewport tag gives the browser instructions on how to control the page's dimensions and scaling.

**HTML**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    …
    <meta name="viewport" content="width=device-width, initial-scale=1">
    …
  </head>
  …
```

Using the meta viewport value `width=device-width` instructs the page to match the screen's width in device-independent pixels. A device (or density) independent pixel being a representation of a single pixel, which may on a high density screen consist of many physical pixels. This allows the page to reflow content to match different screen sizes, whether rendered on a small mobile phone or a large desktop monitor.

#### Page Widths

Unfortunately, there’s no defined standard for the page widths to target, but the following example responsive values are often used:

- `320px`
- `480px`
- `600px`
- `768px`
- `900px`
- `1024px`
- `1200px`

With any of these reasonable sets of increments, you can target most devices. In practice, there is usually no need to separately handle all of the aforementioned examples of page widths—seven different resolutions is probably overkill.

#### Psuedo-Elements

Building on top of your responsive media queries from the previous example, you also might want to show or hide certain information programatically based on the size of the user’s device. Luckily, this too can be accomplished with pure CSS as outlined in the tutorial below.

For starters, hiding some elements (`display: none;`) can be a great solution when it comes to reducing the number of on-screen elements for a smartphone layout, where there’s almost always insufficient space.

But beyond that, you can also get creative with CSS pseudo-elements (selectors), e.g., `:before` and `:after`. Note: once again, pseudo-elements are supported by all major browsers.

Pseudo-elements are used to apply specific styles to specific portions of an HTML element, or to select a certain subset of elements. For example, the :first-line pseudo-element lets you define styles solely on the first line a certain selector (e.g., p:first-line will apply to the first line of all ps). Similarly, the a:visited pseudo-element will let you define styles on all as with links previously visited by the user. Clearly, these can come in handy.

[Standard pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

**Example**

```
.username:after {
    content:"Insert your user name";
}
@media screen and (max-width: 1024px) {
    .username:before {
        content:"User name";
    }
}
@media screen and (max-width: 480px) {
    .username:before {
        content:"";
    }
}
```

### Output

![Media Queries](/responsive.png)

#### How to write Media Queries in SASS & CSS

    Media queries allow you to customize the presentation of your web pages for a specific range of devices like mobile phones, tablets, desktops, etc. without any change in markups. A media query consists of a media type and zero or more expressions that match the type and conditions of a particular media features such as device width or screen resolution.

    Since media query is a logical expression it can be resolve to either true or false. The result of the query will be true if the media type specified in the media query matches the type of device the document is being displayed on, as well as all expressions in the media query are satisfied. When a media query is true, the related style sheet or style rules are applied to the target device. Here's a simple example of the media query for standard devices.

**Major type of Break Points**

```
/* Smartphones (portrait and landscape) ---------- */
@media screen and (min-width: 320px) and (max-width: 480px){
    /* styles */
}
/* Smartphones (portrait) ---------- */
@media screen and (max-width: 320px){
    /* styles */
}
/* Smartphones (landscape) ---------- */
@media screen and (min-width: 321px){
    /* styles */
}
/* Tablets, iPads (portrait and landscape) ---------- */
@media screen and (min-width: 768px) and (max-width: 1024px){
    /* styles */
}
/* Tablets, iPads (portrait) ---------- */
@media screen and (min-width: 768px){
    /* styles */
}
/* Tablets, iPads (landscape) ---------- */
@media screen and (min-width: 1024px){
    /* styles */
}
/* Desktops and laptops ---------- */
@media screen and (min-width: 1224px){
    /* styles */
}
/* Large screens ---------- */
@media screen and (min-width: 1824px){
    /* styles */
}
```

#### !.CSS

**HTML**

```
<p class="box">Box</p>
```

**CSS**

```
.box {
  display: inline-block;
  padding: 1em;
  margin: 1em;
  background: #b3e888;
  font-size: 2em;
}
@media only screen and (min-width: 640px) and (max-width: 799px) {
  .box {
    font-size: 1em;
    background: red;
  }
}
```

[ More ](https://css-tricks.com/css-media-queries/)

#### !!.SCSS

**SCSS**

```
$breakpoint-tablet: 768px;
@include breakpoint(453px $breakpoint-tablet) {}
@include breakpoint($breakpoint-tablet 850px) {}
@media (min-width: $breakpoint-tablet) {}
```

**CSS**

```
@media (min-width: 453px) and (max-width: 768px) {}
@media (min-width: 768px) and (max-width: 850px) {}
@media (min-width: 768px) {}
```

[ There are lot of methods you can try on this](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32)
[Click here and watch tutorial on youtube](https://www.youtube.com/watch?v=roywYSEPSvc)
