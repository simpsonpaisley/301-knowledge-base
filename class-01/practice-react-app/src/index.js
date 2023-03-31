import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Section from './Section';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header message="Hello, this is my message, sent using Props" />
		<Sidebar />
		<App paragraph="This is another Props message." />
		<Section />
		<Footer footerMessage="Another message sent using props." />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
