const path = require('path');
module.exports = {
	devtool: "source-map",
	entry: [
		require.resolve('./public/io.js'), // Socket client to get server events
		'./client/index.js',
	],
	node: {
    net: 'empty',
  },
	output: {
		path: path.resolve('public'),
    pathinfo: true,
    chunkFilename: '[name].chunk.js',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		],
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}]
	}
}
