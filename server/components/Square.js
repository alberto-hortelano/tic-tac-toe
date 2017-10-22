import React from 'react';
import PropTypes from 'prop-types';

const Square = ({state, onClick}) => {
	console.log('state.click.squares',state.click.squares);
	return (
		<div>
		{
			state.click.squares.map((square,index/*,squares*/) =>
			<button
				key={index}
				className="square"
				onClick={(e) => onClick(e, index)}
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
