---
title: "UI Mastery"
subheading: "HTML Accessibility"
next: "css"
prev: "html"
contentOnly: true
---

### What HTML Accessibility?

Write HTML with accessibility in mind. Provide the user a good way to navigate and interact with your site. Make your HTML code as semantic as possible, so that the code is easy to understand for visitors and screen readers.

### Semantic HTML

Semantic HTML means using correct HTML elements for their correct purpose as much as possible. Semantic elements are elements with a meaning; if you need a button, use the `<button>` element (and not a `<div>`).

```
<button>Click Me</button>
```

Semantic HTML gives context to screen readers, which read the contents of a web page out loud.

With the button example in mind:

- Buttons have more suitable styling by default
- A screen reader identifies it as a button
- Focusable
- Clickable

A button is also accessible for people relying on keyboard-only navigation; it can be clickable with both mouse and keys, and it can be tabbed between (using the tab key on the keyboard).

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

Ensure the accessible name is descriptive enough

```
// bad
<button>Submit</button>
<a href="url">page</a>
// good
<button>Submit review</button>
<a href="url">Neoito's accessibility page</a>
```

### Support keyboard-only use

Keyboard users rely on focus outlines to understand where they are on the page. Therefore, if an element is interactive you must ensure:

- It can receive keyboard focus.
- It has a visible focus state.

Use semantic HTML, such as `a` and `button` , which provides these behaviours by default.

### Headings Are Important

Headings are defined with the `<h1>` to `<h6>`. Search engines use the headings to index the structure and content of your web pages.

Users skim your pages by its headings. It is important to use headings to show the document structure and the relationships between different sections.

`<h1>` headings should be used for main headings, followed by `<h2>` headings, then the less important `<h3>`, and so on.

### Alternative Text

The alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).
The value of the alt attribute should describe the image, If a browser cannot find an image, it will display the value of the alt attribute.

```
<img src="img_chania.jpg" alt="Flowers in Chania">
```

### Declare the Language

Declaring a language is important for screen readers and search engines, and is declared with the lang attribute. Use the following to show a web page in English

```
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
```

### Use Clear Language

Use clear language that is easy to understand, and try to avoid characters that cannot be read clearly by a screen reader. For example:

- Keep sentences as short as possible.
- Avoid dashes. Instead of writing 1-3, write 1 to 3
- Avoid abbreviations. Instead of writing Feb, write February
- Avoid slang words

### Write Good Links

A link should explain clearly what information the reader will get by clicking on that link.

### Link Titles

The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

```
<a href="https://github.com/neoito-hub/" title="Go to Neoito Hub">Visit our Neoito Hub</a>
```

### Role

In general, avoid using `role`. Use semantic HTML elements that implicitly have a `role` instead.

```
// bad
<div role="button">

// good
<button>
```

### Provide accessible names to screen readers

To provide markup with accessible names, ensure every:

- `input` has an associated `label`.
- `button` and `a` have child text, or `aria-label` when text isn’t present. For example, an icon button with no visible text.
- `img` has an `alt` attribute.
- `fieldset` has `legend` as its first child.
- `figure` has `figcaption` as its first child.
- `table` has `caption` as its first child.

### Tabindex

Prefer no tabindex to using tabindex, since:

- Using semantic HTML such as `button` implicitly provides `tabindex="0"`
- Tabbing order should match the visual reading order and positive `tabindex` interfere with this

### Avoid using tabindex="0" to make an element interactive

Use interactive elements instead of `div`s and `span`s . For example:

- If the element should be clickable, use a `button`
- If the element should be text editable, use an `input` or `textarea`
  Once the markup is semantically complete, use CSS to update it to its desired visual state.

```
// bad
<div role="button" tabindex="0" @click="expand">Expand</div>

// good
<button @click="expand">Expand</button>
```

### Do not use tabindex="0" on interactive elements

Interactive elements are already tab accessible so adding `tabindex` is redundant.

```
// bad
<a href="help" tabindex="0">Help</a>
<button tabindex="0">Submit</button>

// good
<a href="help">Help</a>
<button>Submit</button>
```

### Do not use tabindex="0" on elements for screen readers to read

Screen readers can read text that is not tab accessible. The use of `tabindex="0"` is unnecessary and can cause problems, as screen reader users then expect to be able to interact with it.

```
// bad
<span tabindex="0" :aria-label="message">{{ message }}</span>

// good
<p>{{ message }}</p>
```

### Do not use a positive tabindex

Always avoid using `tabindex="1"` or greater.
