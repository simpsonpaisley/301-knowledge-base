# 301 - Class 1 Reading Notes

## Component Based Architecture

Component Based Architecture is the method of making reusable components to reuse on webpages without having to remake them.

They contain methods, events, and properties.

### What is a Component?

A component is a modular, reusable, and replacable set of functionalites that are intended to interact with other components.

### Characteristics of a Component

1. Imports - importing styles or other components.
2. Style - CSS styling.
3. Functions - Contains the HTML for the component.
4. Exports - Exports the component.

### What are the Advantages of Component Based Architecture?

- Saves time, as the components can be reused.
- Decreases debugging time, as components will use the same functions.
- Allows for easier debugging, as if a bug is in a component, you know where to look.
- Reduces costs.
- Makes it easier to update websites.
- Increases reliability.

### Views of a Component

A component can have 3 different views:

    - Conventional View
    - Object-Oriented View
    - Process-Related View

## React

### Making a React Project

To make a React project, we need to use the following command in the terminal:

```
npx create-react-app app-name

```

This will create a folder in the current directory containing the default template React files.

We can then use `npx start` to start the application.

### React Project Structure

- **`node_modules`** - these are the npm packages to assit when working in React.
- **`public`** - this folder contains `index.html` file, which is the template for the React project.
- **`src`** - this folder contains the components of the React app.
- **`package.json`** - this contains the npm package details.

### Creating a Component

To create a component in React, we can make a new JavaScript file. React components should always start with a capital letter.

We can then use the following code in this file to create the component:

```Javascript
import './App.css'; // This imports a stylesheet or other component.

function Component(){
    return <h1>Any HTML for the component goes here!</h1>;
}

export default Component;

```

We use `default`, as we are only exporting one component.

### Using the Component

We can then use the component by going into the main React file, usually called index.js.

First, we need to import the component. We can do this in at the top of the file, using the following code:

```javascript
import Component from './Component';
```

We can then add the component to the hierachy of the pages, using the following in the `root.render()`:

```javascript
<Component />
```

### Classes in React

In React, instead of using the attribute `class="style"` on elements, we need to use `className="style"`.
