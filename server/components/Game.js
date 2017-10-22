import React from 'react';
import { Switch, Route } from 'react-router'

import SquareCT from '../containers/SquareCT.js';
import Row from '../components/Row.js';

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
				<Switch>
					<Route path="/row" component={Row}/>
					<Route component={SquareCT}/>
				</Switch>
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
