const webpack = require('webpack');

const browserConfig = {
	entry: "./clientRender.js",
	output: {
	  path: __dirname,
	  filename: "./public/bundle.js"
	},
	devtool: "cheap-module-source-map",
	module: {
		rules: [
			{
				test: /js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: { presets: ["react-app"] }
			}
		]
	},
	mode: "development"
};

const serverConfig = {
	entry: "./serverRender.js",
	target: "node",
	output: {
	  path: __dirname,
	  filename: "server.js",
	  libraryTarget: "commonjs2"
	},
	devtool: "cheap-module-source-map",
	module: {
		rules: [
			{
				test: /js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: { presets: ["react-app"] }
			}
		]
	},
	mode: "development"
};

module.exports = [browserConfig, serverConfig];
