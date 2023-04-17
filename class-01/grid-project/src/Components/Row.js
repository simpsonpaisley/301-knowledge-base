import Square from './Square';
function Row({ start }) {
	return (
		<div className="row">
			<Square number={start} />
			<Square number={start + 1} />
			<Square number={start + 2} />
		</div>
	);
}

export default Row;
