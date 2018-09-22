/*
* @Author: Shi Wenbin
* @Date:   2018-09-17 20:16:05
* @Last Modified by:   Shi Wenbin
* @Last Modified time: 2018-09-17 21:19:50
*/
var config = {
	entry: {
		'index': ['./src/page/index/index.js'],
		'login': ['./src/page/login/index.js'],
	},
		
	output: {
		path: './dist',
		filename: 'js/[name].js'
	},

	externals: {
		
	}
};

module.exports = config;