const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.jsx',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'main.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		port: 3000,
		open: true,
		compress: true,
		static: path.resolve(__dirname, '/dist'),
		historyApiFallback: true,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
