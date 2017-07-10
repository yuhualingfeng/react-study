var path = require('path')

module.exports = {
	entry:{
		'app':[
		'./app/index.js'
		]
	},
	output:{
		path:path.join(__dirname,'build'),
		publicPath: 'http://localhost:8080/build/',
		filename:'[name].js'
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:'babel',
			exclude:/node_modules/,
			query:{
				'presets':['react','es2015'],
				'env':{
					"development":{
						"presets":["react-hmre"]
					}
				}
			}
		}
		]
	}
}