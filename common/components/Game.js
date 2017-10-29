import React from 'react';
import { Switch, Route } from 'react-router';
import { Helmet } from "react-helmet";

import SquareCT from 'containers/SquareCT.js';
import NotFound from 'components/NotFound.js';

class Game extends React.Component {
	render() {
		console.log('this.props 1',this.props);
		return (
			<div className="game">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Tic Tac Toe</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<div className="game-board">
					<Switch>
						<Route path="/game" component={SquareCT}/>
						<Route component={NotFound}/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default Game;
