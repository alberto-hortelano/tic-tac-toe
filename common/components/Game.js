import React from 'react';
import { Switch, Route } from 'react-router';
import { Helmet } from "react-helmet";

//import DevTools from 'containers/DevTools.js'
import SquareCT from 'containers/SquareCT.js';
import ButtonCT from 'containers/ButtonCT.js';
import NotFound from 'components/NotFound.js';
import { Grid, Row, Col } from 'react-bootstrap';

class Game extends React.Component {
	constructor(props) {
		super(props);
		console.log('Game constructor',props);
		props.onComponentDidMount({ type: 'SET_INITIAL_STATE', value: props.match.params.initialState});
  }

	render() {
		return (
			<div className="game">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Tic Tac Toe</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<Grid>
					<Row className="show-grid">
						<Col sm={6} md={3} lgOffset={3}>
							<div className="game-board">
								<Switch>
									<Route path="/game" component={SquareCT}/>
									<Route component={NotFound}/>
								</Switch>
							</div>
							<Route path="/game" component={ButtonCT}/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Game;
