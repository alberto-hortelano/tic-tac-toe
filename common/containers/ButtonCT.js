import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Button = ({state, onClick, history}) => {
	return (
		<div>
			<button
				className="button"
				onClick={(e) => {
					onClick(e, history);
				}}
			>
			RESET
			</button>
		</div>
	);
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    onClick: (e, history) => {
			console.log('button onclick',history);
      dispatch({ type: 'RESET', value: history});
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
