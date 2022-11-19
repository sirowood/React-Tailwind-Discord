const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, '../server/dist'),
		filename: 'main.js',
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	devServer: {
		port: 3000,
		open: true,
		compress: true,
		static: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			/*
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			*/
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
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
