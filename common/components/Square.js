import React from 'react';
import PropTypes from 'prop-types';

const Square = (input) => {
	const {state, onClick, history} = input;
	console.log('history',history);
	return (
		<div>
		{
			state.click.squares.map((square,index/*,squares*/) =>
			<button
				key={index}
				className="square"
				onClick={(e) => onClick(e, index, history)}
			>
				{square}
			</button>)
		}
		</div>
	);
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default Square;
