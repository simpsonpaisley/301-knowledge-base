import logo from './logo.svg';
import './App.css';

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<p>Hello, {prompt('What is your name?')}</p>
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>Practice React App.</p>
				<p>{props.paragraph}</p>
			</header>
		</div>
	);
}

export default App;
