console.log('webpack config');
const path = require('path');
module.exports = {
	devtool: "source-map",
	target: 'web',
	resolve: {
		modules: [
			path.resolve(__dirname),
			'node_modules'
		],
		alias: {
			'actions': './common/actions',
			'alias': './common/components',
			'containers': './common/containers',
			'reducers': './common/reducers',
			'routes': './common/routes',
			'lib': './common/lib',
			'store': './common/store.js',
		},
	},
	entry: [
		require.resolve('./public/io.js'), // Socket client to get server events
		require.resolve('./client/index.js'),
	],
	node: {
    net: 'empty',
  },
	//stats: 'verbose',
	output: {
		path: path.resolve('public'),
    pathinfo: true,
    chunkFilename: '[name].chunk.js',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		],
		// rules: [{
		// 	test: /\.scss$/,
		// 	use: [{
		// 		loader: "style-loader" // creates style nodes from JS strings
		// 	}, {
		// 		loader: "css-loader" // translates CSS into CommonJS
		// 	}, {
		// 		loader: "sass-loader" // compiles Sass to CSS
		// 	}]
		// }]
	}
}
