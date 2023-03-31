import './App.css';

function Header(props) {
	return (
		<div className="header">
			<h1>Practice React App!</h1>
			<p className="subpara">
				This is a practice React app. This is practicing divs.
			</p>
			<p>{props.message}</p>
		</div>
	);
}

export default Header;
