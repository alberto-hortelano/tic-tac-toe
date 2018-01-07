console.log('client 1');
'use strict';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

import Game from 'components/Game.js';
import GameCT from 'containers/Game.js';
import store from 'store';
import registerServiceWorker from './registerServiceWorker.js';
hydrate(
	<BrowserRouter>
		<Provider store={store}>
			<Route path="/game/:initialState" component={GameCT}/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('content')
);

//registerServiceWorker();
