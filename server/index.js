'use strict';
import express from 'express';
import React from 'react';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet";

import html from './components/Html.js';
import Game from './components/Game.js';
import store from './store';
//import registerServiceWorker from './registerServiceWorker';

const app = express();
const router = express.Router();

router.get('*', (request, response) => {
	console.log(request.originalUrl);
  let context = {};
	const content = ReactDOMServer.renderToString(
		<StaticRouter
			location={request.url}
			context={context}
		>
			<Provider store={store}>
				<Game />
			</Provider>
		</StaticRouter>
	);
	const helmet = Helmet.renderStatic();
	response.send(html(content, helmet));
});

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(router);

module.exports = app;
