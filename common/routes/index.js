'use strict';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

//import Game from '../components/Game.js';
const GameCT =  require('../containers/Game.js');
//import store from '../store';
const store =  require('../store');

const router = express.Router();

const render = (component, data) => {
	console.log(component, data);
	const element = React.createElement(component, data);
	console.log('element',element);
	return ReactDOMServer.renderToString(element);
}
const Html = ({title, number}) => {
	console.log('Html',title, number);
	return (
		<Provider store={store}>
			<GameCT />
		</Provider>
	);
};

Html.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}
router.get('*', (request, response) => {

	response.send(render(Html, {
		title: 'Universal React',
		number: 4
	}));
});

module.exports = router;
