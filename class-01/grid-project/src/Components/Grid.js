import Row from './Row';

function Grid() {
	return (
		<div className="grid">
			<Row start={1} />
			<Row start={4} />
			<Row start={7} />
		</div>
	);
}

export default Grid;
