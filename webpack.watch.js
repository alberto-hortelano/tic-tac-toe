const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

const watching = compiler.watch({}, (err, stats) => {
  // Print watch/build result here...
  //console.log(stats);
	console.log('webpack watch', err, stats.errors);
});

module.exports = watching;
