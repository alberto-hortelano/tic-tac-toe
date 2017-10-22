'use strict';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import Game from './components/Game.js';
import store from './store';
//import registerServiceWorker from './registerServiceWorker';

const app = express();
const router = express.Router();

router.get('*', (request, response) => {
  let context = {};
	response.send(ReactDOMServer.renderToString(
		<StaticRouter
			location={request.url}
			context={context}
		>
			<Provider store={store}>
				<Game />
			</Provider>
		</StaticRouter>
	));
});

app.use(express.static('public'));
app.use(router);

module.exports = app;
