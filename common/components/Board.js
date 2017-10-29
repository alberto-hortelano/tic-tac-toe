import React from 'react';

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			turnX: false,
		};
	}

	handleClick(i) {
	    const squares = this.state.squares.slice();
		const turnX = !this.state.turnX;
		if (this.state.squares[i] === null) {
	    	squares[i] = turnX? 'X': 'O';
		    this.setState({
				squares: squares,
				turnX: turnX
			});
		}
		console.log(i,this.state.squares);
  	}

	render() {
		const status = 'Next player: X';
		const orderN = this.props.orderN;
		const rows = [];
		for (var i=0; i < orderN; i++) {
		    rows.push(
				<Row
					key={i.toString()}
					_key={i.toString()}
					orderN={orderN}
					value={this.state.squares[i]}
					handleClick={(x) => this.handleClick(x)}
				/>
			);
		}

		return (
			<div>
				<div className="status">{status}</div>
				{rows}
			</div>
		);
	}
}

export default Board;
