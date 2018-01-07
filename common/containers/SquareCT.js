import { connect } from 'react-redux';

import Square from 'components/Square.js';

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e, index, history) => {
			console.log('onClick mapDispatchToProps index, history',index, history);
      const state = dispatch({ type: 'CLICK', value: {index, history}});
			console.log('onClick mapDispatchToProps state',state);
    }
  }
}

const SquareCT = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);


export default SquareCT;
