const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	// resolve: {
	// 	extensions: ['.js'],
	// },
};
