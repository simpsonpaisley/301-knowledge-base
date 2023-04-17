# Class 3 Reading Notes

## React

### Modals

Modals are pop ups.

We can create these in React by making a new component.

We can then use `useState()`, with a render conditional to show or hide this.

```javascript
{
	showModal && <Modal />;
}
```

```javascript
!variable; // this will change something that is true to false, and something that is false to true.
```

### Passing Data to Modals

To show dynamic data in modals, we can first set the following state:

```javascript
const [modalData, setModalData] = useState({});
```

We can then add this to our `modalHandler` function, as below:

```javascript
function modalHandler(beast) {
	setModalState(!modalState);
	setModalInformation(beast);
}
```

### Forms in React

To make a form in react, we can use the same HTML as normal in our component JS file.

The only difference in React forms, is that the `for` key needs to be changed to `htmlFor`.

We can then use a function, with the parameter `event` to get the information from the form.

```javascript
function handleSubmit(event) {
	event.preventDefault;
}
```

We can then use `useState()` to capture the information in the form. We can use an event handler to handle the data when someone types into the inputs.

```javascript
const [formValue, setFormValue] = useState('');

function handleChange() {
	// this is an event handler
	setFormValue = event.target.value;
}
```

In the form:

```javascript
return (
	<form>
		<label for="exInput">Example Input</label>
		<input
			name="exInput"
			id="exInput"
			onChange={handleChange()}
		/>
	</form>
);
```

This will run the `handleChange` function each time the value of the input changes.

```javascript
const [form, setForm] = useState({
	formName1: '',
	formName2: '',
});

function handleChange(event) {
	setForm({ ...form, [event.target.name]: event.target.value });
}
```

#### The Spread Operator (...)

When we use the following code:

```javascript
const obh = {
	name: 'rodger',
	age: 1000,
};

obj2 = obj;

obj.age = 1001;

console.log(obj2);
```

This will return `{name: "Rodger", age: 1001}`.

This is because when asking for `obj` rather than making a new object, the computer is using the path to the object on the computer, and changing the object.

If we use the spread operator, it will use the actual object.

```javascript
const obj = {
	name: 'Rodger',
	age: 1000,
};

obj2 = { ...obj };

obj.age = 1001;

console.log(obj2);
```

This will return `{name: "Rodger", age: 1000}`.

This is because it is actually making a new object.
