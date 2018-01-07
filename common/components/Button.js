import React from 'react';
import PropTypes from 'prop-types';

const Button = ({state, onClick, history}) => {
	return (
		<div>
			<button
				className="button"
				onClick={(e, history) => {
					console.log('onclick');
					onClick(e, history);
				}}
			>
			</button>
		</div>
	);
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default Button;
