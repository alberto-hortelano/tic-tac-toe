
const initialState = {
	squares: Array(9).fill(null),
	turn: 'X'
}

function click(state = initialState, action) {
	console.log('action',action);
	console.log('squares',state.squares);
	switch (action.type) {
		case 'CLICK':
			if (state.squares[action.value] === null) {
				console.log('null',state.squares[action.value]);
				const newSquares = state.squares.slice(0);
				newSquares[action.value] = state.turn;
				return Object.assign({}, state, {
					squares: newSquares,
					turn: state.turn === 'X'? 'O': 'X'
				});
			} else {
				return state;
			}
		default:
		return state;
	}
}

export default click;
