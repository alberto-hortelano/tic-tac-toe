
import { connect } from 'react-redux';

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    onClick: (e, ownProps) => {
			console.log('mapDispatchToProps');
      dispatch({ type: 'START_TRAINING', value: ownProps});
    }
  }
}

const RC = function (component, propTypes) {
	component.propTypes = propTypes;
	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(component);
}


export default RC;
