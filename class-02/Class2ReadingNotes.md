# Class 2 Reading Notes

## React

### Local Images

To install an image from our local machine into a component, we first need to import it.

```javascript

import ImageName from image.jpg;

```

### Handlers in React

If we want a handler in React, we can do the following:

```javascript
function Component() {
	function clickHandler() {
		console.log('You Just Clicked');
	}

	return <div onClick={clickHandler}></div>;
}
```

### State

To import useState, we can use the following code in our component:

```javascript
import { useState } from 'react';
```

We can then use this in our component function as so:

```javascript
function Component() {
	const [stateVariable, mutationFunction] = useState(initialValue);
}
```

`useState` is a predefined function, which we have imported from react.

The `stateVariable` is the thing we want to use.

The `mutationFunction` is the function which changes the value.

This can then be used in the handler function as so:

```javascript
function clickHandler() {
	mutationFunction(stateVariable + 1);
}
```

### Arrow Functions

```javascript
function regularFunction() {
	console.log('Normal Function');
}
```

This can also be written as:

```javascript
const arrowFunction = () => {
	console.log('Arrow Function');
};
```

### For Each

The `forEach` function can be used to loop through an array, instead of using a for loop.

```javascript
const array = ['val1', 'val2', 'val3'];

array.forEach((item) => {
	console.log(item);
});
```

### Mapping through Arrays.

A `map` function which can be also be used to loop through an array. Unlike `forEach`, `map` will go through the array, and run the function script on each value in the array.

```javascript

array.map(({val1, val2, val3}) => (
    //script
));
```
