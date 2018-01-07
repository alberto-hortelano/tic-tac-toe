
const initialState = {
	squares: Array(9).fill(null),
	turn: 'X',
	winner: null,
}
function checkWinner(squares, square, turn) {
	const col = square%3;
	if (squares[col] === turn && squares[col+3] === turn && squares[col+6] === turn) return turn;
	const row = ~~(square/3);
	if (squares[3*row] === turn && squares[3*row+1] === turn && squares[3*row+2] === turn) return turn;
	const diagonal1 = square%4 === 0;
	if (diagonal1 && squares[0] === turn && squares[4] === turn && squares[8] === turn) return turn;
	const diagonal2 = col+row === 2;
	if (diagonal2 && squares[2] === turn && squares[4] === turn && squares[6] === turn) return turn;
	console.log(col,row,diagonal1,diagonal2,turn);
	return false;
}
function click(state = initialState, action) {
	switch (action.type) {
		case 'SET_INITIAL_STATE':
			if (action.value.length === 9) {
				let turn = 0;
				const newSquares = action.value.split('').map(char => {
					if (char === 'X') {
						turn++;
					} else if (char === 'O') {
						turn--;
					} else {
						return null;
					}
					return char;
				});
				console.log('SET_INITIAL_STATE',JSON.stringify(newSquares));
				return Object.assign({}, state, {
					squares: newSquares,
					turn: turn > 0? 'O': 'X',
				});
			} else {
				return state;
			}
		case 'RESET':
			console.log('RESET',action.value);
			action.value.push('/game/---------');
			return initialState;
		case 'CLICK':
			console.log('CLICK action',action);
			console.log('CLICK state',state);
			if (state.squares[action.value.index] === null && !state.winner) {
				const newSquares = state.squares.slice(0);
				newSquares[action.value.index] = state.turn;
				const winner = checkWinner(newSquares, action.value.index, state.turn);
				const turn = state.turn === 'X'? 'O': 'X';
				action.value.history.push('/game/'+newSquares.map(char => (char === 'X' || char === 'O')? char: '-').join(''));
				console.log(newSquares);
				return Object.assign({}, state, {
					squares: newSquares,
					turn,
					winner,
				});
			} else {
				return state;
			}
		default:
			return state;
	}
}

export default click;
