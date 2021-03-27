const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css|.styl$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			inject: true,
			filename: './index.html',
			scriptLoading: 'defer',
		}),
		new MiniCssExtractPlugin(),
	],
};
