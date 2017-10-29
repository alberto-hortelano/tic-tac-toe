console.log('client 1');
'use strict';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Game from 'components/Game.js';
import store from 'store';
import registerServiceWorker from './registerServiceWorker.js';
console.log('ddddddd');
hydrate(
	<BrowserRouter>
		<Provider store={store}>
			<Game />
		</Provider>
	</BrowserRouter>,
	document.getElementById('content')
);

registerServiceWorker();
