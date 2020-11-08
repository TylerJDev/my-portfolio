---
title: Let's build an accessible modal in React!
date: 2020-10-25T16:21:47.213Z
description: Often, I see modals which are clearly inaccessible from the get go.
  So how about we make our own!
tags:
  - ARIA
  - HTML
  - A11Y
  - Modal
  - Dialog
---
Nowadays, you cannot visit a website without being bombarded with some type of modal. Whether that modal be a promotional advert, or a paywall, usually the first instinct is to close that modal as soon as possible. Though there are *some* good cases of a modal dialog, rather that be a way to quickly gather information on a particular item, or a quick way to do some functionality on that page without having to wait for a page redirect.

The big issue I find with modal dialogs is that they tend to be inaccessible. Not because of the concept of a modal; rather a lack of functionality for some users. In this post, I want to try to create an accessible modal dialog, using React. I’ll be using [Create React App](https://github.com/facebook/create-react-app) so that I’ll have a quick setup and it'll be easier to follow along. I’ll also be utilizing react hooks.

Personally, I haven't been using react hooks too much frequently. I've seen the added benefit when using them against class based components. So feel free to adjust some of the code to fit your own preferences, or refactoring!

## Setup

To start us off, we'll be utilizing Create React App. If you don’t know what Create React App is, you can find out [more information about it in the documentation](https://reactjs.org/docs/create-a-new-react-app.html). In short, “Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React”.

So let's start by running the following command in your terminal. (Add Yarn Support)

`npx create-react-app a11y-modal`

This should take a minute or two to create the directory and generate the initial project structure as well as install the dependencies it needs.

Once that has finished, we'll need to go within that directory: 

`cd a11y-modal`

We'll then need to start our server, we can do this by using:

`npm run start`

Once our server is up and running, we can get to work!

Open up your a11y-modal folder in your preferred code editor. Within the `src/` folder, we'll create 3 folders. Create a folder named '**components**' and '**utils**' within the `src/` folder. Then we'll create another folder inside of your newly created `components/` folder, named '**styles**'. Inside of your `styles/` folder, create a .css file named "**Modal.css**" Do note that this is my own personal preference when keeping my directory organized. If you have your own preference, feel free to change it up.

Next, we’ll create a file named “**Modal.js**” within the `components/` folder. Once you’ve created the Modal.js file, we’ll import a few things.

```javascript
/* Modal.js */
import { useEffect, useRef } from 'react';
import './styles/Modal.css';
```

We will mainly be using the useEffect and useRef hooks. If you don’t know what they are, we’ll go in more detail later. 

After we’ve imported our stylesheet, and hooks, we’ll create our first component! We’ll be using functional components throughout this post, so if you’re not too familiar with them I’ll be explaining them and providing references to fall back on.

Right after the imports, we'll be creating a functional component named "`A11yModal`".

```javascript
/* Modal.js */
import { useEffect, useRef } from 'react';
import './styles/Modal.css';

const A11yModal = () => {
  return (
    <h1>Hello, world!</h1>
  )
};
 
export default A11yModal;
```

Awesome, we’ve created our functional component, and exported it. We’ll want to import it within our `App.js` file, which is directly within our `src/` folder.

```javascript
/* App.js */
import './App.css';
import A11yModal from './components/Modal';
import React, {useState, useRef} from 'react';
```

**(Make note of what to delete within App.js, also show full code within App.js at start of build)**

While we're within App.js, we should go ahead and remove most of the code within and start fresh. We'll want to remove the code within the `<div className="App">` inside of the `App` component. Your `App.js` should now look like this:

```javascript
/* App.js */
import './App.css';
import A11yModal from './components/Modal';
import React, {useState, useRef} from 'react';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

```

We should be able to now make the modal dialog itself.

## Creating the modal dialog

Inside of your App component, let's utilize our A11yModal component that we imported earlier:

```javascript
/* App.js */
function App() {
  return (
    <div className="App">
      <A11yModal />
    </div>
  );
}
```

We should now see a heading with the text "Hello, world!" on our page, great! Let's go back into our `Modal.js` file and create the modal dialog. 

When creating a modal dialog, we need to ensure the following things:

1. It contains a way to exit the modal.
2. The content outside or behind the modal is inert, meaning that users can't interact with the content behind the modal.
3. Focus is trapped within that modal when it is present on the page.

These are a few steps I go through when ensuring that a modal is both usable and accessible. There are a few steps in between, but that depends on the scope of the modal.

Within your App.js, remove the `<h1>Hello, world!</h1>` element, and start the modal by creating a `<div>` with the class of `.modal-container`. Within `.modal-container`, we'll create a few more elements.

```javascript
const A11yModal = () => {
    return (
      <div className="modal-container">
        <div className="modal-backdrop"></div>
      
        <div id="modal">
          <div className="modal-close-container"></div>
      
          <div className="modal-header">
            <div className="modal-headings"></div>
          </div>
      
          <div className="modal-main"></div>
        </div>
      </div>
    )
};
```

We should now have a basic skeleton of how our modal will be formatted. We're using `.modal-backdrop` as the "overlay" behind the modal that'll have some opacity to it. This is separate from the modal itself, but we want to keep it retained within our `.modal-container`. Our `.modal-close-container` will contain our close button for the modal, whereas `.modal-header > .modal-headings` will keep our headings for the modal. Last but not least, our `.modal-main` element will contain all of the other content.

Let's start off by adding onto our modal, first we'll create a close button within `.modal-close-container`. 

```javascript
<div className="modal-close-container">
  <button id="modal-close">Close</button>
</div>
```

Right now our button doesn't do anything, but we'll add some functionality later.