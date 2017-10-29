import { connect } from 'react-redux';

import Square from 'components/Square.js';

const mapStateToProps = (state/*, ownProps*/) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    onClick: (e, ownProps) => {
			console.log('ownProps',ownProps);
      dispatch({ type: 'CLICK', value: ownProps})
    }
  }
}

const SquareCT = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);


export default SquareCT;
