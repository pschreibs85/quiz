module.exports = {
	entry: './client/js/app.js',
	output:{
		filename:'app.js',
		path: './client/public'
	},
	module:{
		loaders:[
			{
				test:/.jsx?/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}