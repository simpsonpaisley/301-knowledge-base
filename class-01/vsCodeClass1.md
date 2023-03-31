# V's Code Class 01

## Creating a React Component

```javascript
// Four main characteristics

// Imports
import './App.css';

// Styles
// no need to style here

// Functions
function Header() {
	return <h1 className="header">Here is the header , Header</h1>;
}

// Exports
export default Header;
```

## Importing a Component

```javascript
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';

// Components
import App from './App';
import Header from './header';
import Footer from './footer';
import Side from './side';

const root = ReactDOM.createRoot(document.getElementById('root')); // you are getting the div element in the index.html from public folder
root.render(
	<React.StrictMode>
		<Header />
		<Side />
		<App />
		<Footer />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## Styling a Component

```javascript

/ Imports
import "./App.css";

// Styles

// Functions
function Footer() {
  return (
    <div>
      <h1 className="footer">Footer</h1>
    </div>
  );
}

// Exports
export default Footer;

```

## Sending a Prop from a Parent Component

```javascript
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';

// Components
import App from './App';
import Header from './header';
import Footer from './footer';
import Side from './side';

const root = ReactDOM.createRoot(document.getElementById('root')); // you are getting the div element in the index.html from public folder
root.render(
	<React.StrictMode>
		<Header
			thisIsKey="This is the value"
			thisHeader="The color is red"
		/>

		<Side />
		<App />
		<Footer />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## Receiving a Prop in a Child Component

```javascript
// Four main characteristics

// Imports
import './App.css';

// Styles
// no need to style here

// Functions
function Header(props) {
	// Logic Here
	console.log(props);
	console.log(props.thisIsKey);
	console.log(props.thisHeader);

	return (
		<div>
			<h1 className="header">Here is the header , Header</h1>
			<p>This is about header</p>
			<p>2 + 2</p>
			<p>{props.thisHeader}</p>
		</div>
	);
}

// Exports
export default Header;
```
