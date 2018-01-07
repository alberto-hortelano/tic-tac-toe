
const initialState = {};

function train(state = initialState, action) {
	switch (action.type) {
		case 'START_TRAINING':
			console.log('START_TRAINING');
			return state;
		default:
		return state;
	}
}

export default train;
