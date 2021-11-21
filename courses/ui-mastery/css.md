---
title: "UI Mastery"
subheading: "CSS"
next: "naming-standard-bem"
prev: "html-accessibility"
contentOnly: true
---

### What is CSS?

Cascading Style Sheets (CSS) is used to format the layout of a webpage.

CSS can be added to HTML documents in 3 ways:

- Inline - by using the style attribute inside HTML elements
- Internal - by using a `<style>` element in the `<head>` section
- External - by using a `<link>` element to link to an external CSS file

```
 <head>
  <link rel="stylesheet" href="styles.css">
 </head>
```

### CSS Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model

![alt text](https://miro.medium.com/max/1474/1*gq1B7v2_gDEi3jkAwAvZNQ.png)

Explanation of the different parts

- Content - The content of the box, where text and images appear
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent

The box model allows us to add a border around elements, and to define space between elements.

**Reference :**
https://www.youtube.com/watch?v=rIO5326FgPE
[How CSS works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)

### Things to learns

- [CSS Selectors](https://css-tricks.com/how-css-selectors-work/)
- [CSS Box Model](https://css-tricks.com/the-css-box-model/)
- [CSS Layout](http://learnlayout.com/)
- [Styling Text with CSS](https://www.inwebson.com/css3/css-tricks-for-headings-fonts-and-text-styling/)
- [CSS Units](https://ishadeed.com/article/viewport-units/)
- Styling Boxes with CSS
- CSS Colors and Gradients
- CSS Transitions and Animations
- CSS Transforms
- CSS Pseudo-classes and Pseudo-elements
- CSS At-Rules (e.g. Media Queries)
- CSS Specificity
- CSS Preprocessors
- [Typography](https://css-tricks.com/typography-for-developers/)

### CSS animation

Nowadays, animation has become a necessary thing for designing a website. Microinteraction has become a vital part of any website. So it is very important to understand the basics of CSS animation.
Let’s start with an example:

```
.element {
  animation-name: stretch;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
}

	@keyframes stretch{
	0%{
		width: 20px;
	     }
	100% {
    width: 50px;
		}
	}
```

- Animation-name : Specifies the name of the @keyframes animation.
- Animation-duration: Specifies the duration of the animation
- Animation-timing-function: Specifies the curve in which the animation should work.
- Animation-delay: Specifies a delay to start the animation.
- Animation-direction: Specifies the direction in which the animation should work.
- Animation-iteration-count: Specifies the number of times the animation should work.
- Animation-fill-mode: Specifies the style to be applied to the element when the animation is complete.

`@keyframes` : It is the one which is responsible to do the expected animation to the particular element.
The shorthand for writing the above all is as follows:
Format:

```
.element {
	Animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode
}
```

You should the same format
Example:

```
.element {
  		animation:  stretch  1.5s ease-out 0s alternate  infinite none;
}
```

Animation: The whole animation effect can be achieved by this shorthand `animation`
**Reference :**

1. https://www.youtube.com/watch?v=1PnVor36_40
2. https://www.w3schools.com/css/

### Exercises

1. Create a sign up form
2. Build a Personal Portfolio Webpage
