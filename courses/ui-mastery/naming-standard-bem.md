---
title: "UI Mastery"
subheading: "Naming Standard BEM"
next: "js-basics"
prev: "css"
contentOnly: true
---

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

Here’s an example of what a CSS developer writing in the BEM style might write:

```
 /* Block component */
.btn {}
/* Element that depends upon the block */
.btn__price {}
/* Modifier that changes the style of the block */
.btn--orange {}
.btn--big {}
```

### Block

---

Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.

#### Naming

Block names may consist of Latin letters, digits, and dashes. To form a CSS class, add a short prefix for namespacing: `.block`

#### HTML

Any DOM node can be a block if it accepts a class name.

```
<div class="block">...</div>
```

#### CSS

- Use class name selector only
- No tag name or ids
- No dependency on other blocks/elements on a page

```
.block { color: #042; }
```

### Element

---

Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

#### Naming

Element names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block name plus two underscores plus element name: `.block__elem`

#### HTML

Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.

```
<div class="block">
	  ...
	  <span class="block__elem"></span>
	</div>
```

#### CSS

- Use class name selector only
- No tag name or ids
- No dependency on other blocks/elements on a page

##### Good

```
.block__elem { color: #042; }
```

##### Bad

```
.block .block__elem { color: #042; }
	div.block__elem { color: #042; }
```

### Modifier

---

Flags on blocks or elements. Use them to change appearance, behavior or state.

#### Naming

Modifier names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block’s or element’s name plus two dashes: `.block--mod` Or `.block__elem--mod` and `.block--color-black` with `.block--color-red`. Spaces in complicated modifiers are replaced by dash.

#### HTML

Modifier is an extra class name which you add to a block/element DOM node. Add modifier classes only to blocks/elements they modify, and keep the original class:

##### Good

```
<div class="block block--mod">...</div>
	<div class="block block--size-big
		block--shadow-yes">...</div>
```

##### Bad

```
<div class="block--mod">...</div>
```

#### CSS

Use modifier class name as selector:

```
.block--hidden { }
```

To alter elements based on a block-level modifier:

```
.block--mod .block__elem { }
```

Element modifier:

```
.block__elem--mod { }
```

### Example

---

Suppose you have block form with modifiers `theme: "xmas"` and `simple: true` and with elements `input` and `submit`, and element `submit` with its own modifier `disabled: true` for not submitting form while it is not filled:

#### HTML

```
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

#### CSS

```
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```
