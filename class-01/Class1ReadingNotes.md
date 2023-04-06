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

'npx' means Node Package Execute.

This will create a folder in the current directory containing the default template React files.

If we accidentally delete the dependencies, we can use the command `npm install` in the terminal to reinstall the dependencies.

We can also delete the node modules folder to save space when not using the application.

We can then use `npx start` to start the application.

### React Project Structure

- **`node_modules`** - these are the npm packages to assit when working in React.
- **`public`** - this folder contains `index.html` file, which is the template for the React project.
- **`src`** - this folder contains the components of the React app.
- **`package.json`** - this contains the npm package details.

### Git Ignore

We can write files in the `gitignore` file, so they don't get pushed to GitHub.

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

We can then use the class names in the CSS stylesheet that has been imported to the component.

### Multiple Elements in a Component

The `return` function can only handle one element at a time.

The following code will not work:

```javascript
function Component(){
    return <h1>Heading</h1>
            <p>Paragraph</p>
}
```

To combat this, when we need more than one element in a component, we can nest the elements inside a `<div>` tag.

`return` will then consider the `div` and everything inside it as one single element.

You also need to contain the `div` inside parenthesis, as below:

```javascript
function Component() {
	return (
		<div>
			<h1>Heading</h1>
			<p>Paragraph</p>
		</div>
	);
}
```

### Props

**Props** is short for properties. These are properties given to a child component from a parent.

This data is read only.

We can send a property from a parent component to a particular child element, using the following code:

```javascript
<Child message="message here" />
```

This will send the message as an object, called `props`.

We can then access this in the child component using the following:

```javascript
function Child(props) {
	console.log(props); // This will return {message: "message here"} in the console.

	console.log(props.message); // This will return "message here" in the console.
}
```

You can send multiple properties using this, as they will be stored in an object, from which the individual key-value pairs can be accessed by dot notation.

These can then be used in the component to create dynamic content, by using flower brackets `{}` inside the HTML.

The flower brackets can be used on any dynamic content, not just props.

```javascript
function Child(props) {
	return (
		<div>
			<p>{props.message}</p>
		</div>
	);
} // This will create a paragraph containing the text "message here".
```

### Destructuring

If we have an object, for example:

```javascript
const objectOne = {
	keyOne: 'valueOne',
	keyTwo: 'valueTwo',
	keyThree: 'valueThree',
	keyFour: 'valueFour',
};
```

We can use the following code to deconstruct it:

```javascript
const { keyOne, keyThree } = objectOne;
```

This will create a new variables, called keyOne and keyThree, who's values are the value of their respective keys in the objectOne object.

## GitHub

### Adding a GitHub Repo from Local Machine

When we have made a project on out computer, but not already made a repo on GitHub, we can initialise the folder the project is in using the command `git init`.

If we are making a React project, this is automatically done if we create the app using `npx create-react-app`.

We can then go into GitHub on the browser, and create a new repository with the same name as our project. You shouldn't add a README.md.

We can then use the following command in our terminal, while in the root folder of our project:

`git remote add origin <repolink>`

We can then use the following command, which changes the name of the `master` branch to `main`.

`git branch -M main`

We can then use the push command, to push the local files to the remote repo.

`git push -u origin main`
