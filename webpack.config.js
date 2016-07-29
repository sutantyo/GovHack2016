module.exports = {
	entry: "./private/js/entry.jsx",
	output: {
		path: __dirname + "/public/js",
		filename: "bundle.js" // default output filename
	},
	resolve: {
		extensions: ['','.js','.jsx']
	},
  module: {
		loaders: [
			{ test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: { presets: ['react','es2015'] }
			}
		]//end loaders
	}
};
