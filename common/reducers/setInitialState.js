
const initialState = {
	squares: Array(9).fill(null),
	turn: 'X',
	winner: null,
}
function setInitialState(state = initialState, action) {
	switch (action.type) {
		case 'SET_INITIAL_STATE':
			console.log('SET_INITIAL_STATE',action,state);
			return state;
		default:
			return state;
	}
}

export default setInitialState;
