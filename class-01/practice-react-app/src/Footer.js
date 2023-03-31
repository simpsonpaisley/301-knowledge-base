import './App.css';

function Footer(props) {
	return (
		<div className="footer">
			<p>Footer</p>
			<p className="subpara">{props.footerMessage}</p>
		</div>
	);
}

export default Footer;
