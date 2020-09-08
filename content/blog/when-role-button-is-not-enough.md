---
title: When role="button" is not enough
date: 2020-09-07T18:36:17.247Z
description: The attribute role="button" is often used in place of a regular
  button element, yet this is not enough to ensure the element is actually
  accessible.
tags:
  - ARIA
  - HTML
  - a11y
  - roles
---
Whenever I find a website that I particularly like, I open up my browser’s devtools to get an idea on how it was built. Needless to say, I do this *quite a lot*. In some cases, I solely look at the code to get an idea of how accessible a website truly is. One thing that always stands out like a sore thumb is an element with an improper role attribute.

For this post, I will specifically talk about **role=”button”**, and how it may be misused.

Developers tend to use `role=”button”` to turn an element into a "button". This is to indicate to AT users, that the element with the `role="button"` is indeed a button. In many cases this is not enough to make that element accessible.

Before I begin, I would like to say that in **all cases**, utilizing a regular `<button>` element is preferred over `role=”button”`. You should only utilize the role in events where you cannot use a native button element.

## What is not enough?

When utilizing `role=”button”`, you need to ensure that the element is tabbable. Though, that is only if the element isn’t already natively tabbable. For example, an anchor element `<a>` is natively tabbable if there is a valid `href` attribute attached. 

Imagine the following scenario, where a user needs to utilize the search button, but it’s a div:

```html
<!-- Toggles search input on/off -->

<div onclick="openSesame">Search</div>

<!-- This is not at all accessible! -->
```

**In the example above, the element is not at all accessible to users who utilize AT. We can circumvent that by making it a semantic button.**

Perhaps there’s some sort of constraint where you can’t turn an element into a native button. That’s where `role=”button”` comes in:

```html
<!-- role attribute takes value as a string -->

<div role="button" onclick="openSesame">Search</div>

<!-- is now a "button" in accessibility tree -->
```

Though we are close, this is still not accessible. An AT user cannot tab, nor focus onto the element, as there is no tabindex. We can fix that by adding a tabindex with the value of "0":

```html
<!-- tabindex="0" means element is in sequential focus navigation of the page -->
<div role="button" tabindex="0" onclick="openSesame">Search</div>
```

It might not be a surprise to hear me say that this still isn’t enough. In some cases, an AT user may now be able to focus and trigger this button, whereas some will still not be able to. 

Some screen readers simulate a "click" when enter is pressed, instead of a keydown event. That means that in the above example, the "onclick" event would actually trigger for *some* AT. Though, for most, it still isn't accessible. This isn't a topic I will dwell on in this post, but this is always good to keep note of.

In a good majority of cases where I see elements which have role=”button”, **two out of three** criteria are met, being `role=”button”` and a `tabindex`. Though they often fall short of having an actual keydown event attached. 

There are also cases where the element which has the role is a natively tabbable element, like an anchor element  `<a>` (if a valid href is attached). In this case, using the “enter” key does work, yet you can’t activate an anchor element with the space key, whereas with a `<button>` element, both "space" and "enter" would trigger it.

## How to make it fully accessible

Making an accessible button when a native button cannot be used is pretty simple. This is how:

### Step 1: Add the role

```html
<!-- Add role="button" to the elem -->

<div role="button">Hello, I'm now a button!</div>
```

This will ensure that the role is announced to an AT user. Without, an AT user may be confused about what type of element it is. It'll be listed as a "button" in the accessibility tree.

### Step 2: Add a tabindex

```html
<div role="button" tabindex="0">Hello, I’m a button!</div>
```

This ensures that the element is tabbable. It is generally not advisable to set a tabindex value greater than 0.[](https://webaim.org/techniques/keyboard/tabindex) [Here's a good post on why you shouldn't set a positive tabindex.](https://webaim.org/techniques/keyboard/tabindex)

### Step 3: Add a keydown event

```javascript
document.querySelector('div[role="button"]').addEventListener('keydown', function(e) {
  const key = e.key !== undefined ? e.key : e.keyCode;
  // e.key && e.keycode have mixed support - keycode is deprecated but support is greater than e.key
  // I tested within IE11, Firefox, Chrome, Edge (latest) & all had good support for e.key

	if ( (key === 'Enter' || key === 13) || (['Spacebar', ' '].indexOf(key) >= 0 || key === 32)) {
    // In IE11 and lower, e.key will equal "spacebar" instead of ' '

    // Default behavior is prevented to prevent the page to scroll when "space" is pressed
    e.preventDefault();
    this.click();
  }
});
```

The above ensures that the element triggers the click event (if one is attached). There’s many ways to implement a keydown event, but this is the most simplistic way I could think of.

### Step 4: Test it

You should always manually test something, especially for a11y purposes. Perhaps something is blocking the keydown event, or maybe focus isn’t styled properly on this element. You won’t know until you test it out.

## Common gotchas

1. **Anchor elements and role="button"**

   It’s easy to add a role to an element without realizing that more needs to be added to make it functional. I often see anchor elements `<a>` with `role=”button”` attached. This is perfectly fine, but I often see a step missing with ensuring true accessibility of that element.

   An anchor element only triggers with the “enter” key. As stated earlier, a native button element will trigger by both “enter” and “space”.

   To ensure an anchor element with a role of button is accessible, add a separate keydown for the “space” key. This keydown event should trigger the same event that a click, or pressing the “enter” key would.
2. **Styles and role="button"**

   When utilizing `role=”button”`, sometimes it’s good to style that element as an actual button would appear. This isn’t exactly a requirement, but it aids in ensuring that all users are able to recognize it as a button.
3. **Having the same click and keydown event**

   I have not seen a case where a click event and keydown should have been different. A keydown event should trigger the same event as would the click event. You should also ensure that a click event is attached, as an element utilizing `role=”button”` should function the same way via click or “enter” and “space”.

## ARIA attributes

**There are a few ARIA attributes you can utilize to make role=”button” even more accessible.**

1. `aria-pressed`

   Attribute `aria-pressed` can have the values "**true**", "**false**" or "**mixed**". Utilizing this attribute means that you can make "toggle" buttons which indicate the state of the button. When the value is "true", it means that the button is currently pressed and when the value is "false", it means that the button is not currently pressed. The "mixed" value means that the values of more than one item controlled by the button do not all share the same value. *I personally haven't seen aria-pressed="mixed" being used before, and I have not used it myself.* 

   [Here's a bit more information about aria-pressed from the specification](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).
2. `aria-expanded`

   You may utilize aria-expanded to notify the user that the element, or element it controls is either expanded or collapsed. [This is generally used when making accordions](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html), where the content is initially hidden and only expanded when activating the trigger. The values supported by `aria-expanded` are "**true**" or "**false**".

   [You can learn more from the specification](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded).

## Further Reading

With that, I hope this article helps you when creating accessible buttons! While it may be easy to use them incorrectly, it's also easy to use them properly. Always feel free to message me if you have any questions related to the topic, or anything a11y related!

Here's a few posts that I believe will supplement what was discussed in this article.

1. [ARIA: button role - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
2. [Toggle Buttons - Inclusive Components](https://inclusive-components.design/toggle-button/)
3. [Button Examples | WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html)
4. [Keyboard Accessibility with the Space Bar](http://www.last-child.com/keyboard-accessibility-with-the-space-bar/)
5. [What does "focusable" mean? - ally.js](https://allyjs.io/what-is-focusable.html)