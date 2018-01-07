'use strict';

// PROCESS
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {throw err});

['SIGINT', 'SIGTERM'].forEach(sig => process.on(sig, process.exit));

// IMPORTS
import findPort from 'find-free-port';
import webpack from 'webpack';
import { createServer } from 'http';
import io from 'socket.io';
// local imports
import webpackConfig from '../webpack.config.js';
import app from '../server';

// CONSTANTS
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8801;
const HOST = process.env.HOST || '0.0.0.0';
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const compiler = webpack(webpackConfig);
const server = createServer(app);
const socket = io(server);

let lastHash = '';
compiler.watch({
	aggregateTimeout: 1000,
	ignored: 'node_modules',
	poll: 3000,
}, (err, stats) => {
	if (lastHash !== stats.hash) {
		console.log('webpack watch', err);
		lastHash = stats.hash;
		socket.emit('webpackWatch',err);
	}
});

socket.on('connection', (/*skt*/) => {
  console.log('a user connected');
});

// Get free port starting from DEFAULT_PORT to DEFAULT_PORT+4.
findPort(DEFAULT_PORT, DEFAULT_PORT+4, HOST, (err, PORT) => {
	if (err) {
		console.log('findPort', err);
		process.exit(1);
		return;
	}
	process.env.PORT = PORT;
	server.listen(PORT, () => {
		console.log(`server listening at ${protocol}://${HOST}:${PORT}`);
	});
});
