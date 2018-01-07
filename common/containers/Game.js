import { connect } from 'react-redux';

import Game from 'components/Game.js';

console.log('@@@ Game CT');
const mapStateToProps = (state, ownProps) => {
	console.log('state',state);
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('@@@ mapDispatchToProps');
  // dispatch({ type: 'SET_INITIAL_STATE', value: ownProps.match.params.initialState});
	return {
		onComponentDidMount: (ownProps) => {
			console.log('onComponentDidMount', ownProps);
		  dispatch(ownProps);
    }
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
