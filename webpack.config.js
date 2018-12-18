var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin');
// var babel = require("@babel/core");
module.exports = {
	entry: {
		app: path.join(__dirname,'src','index.js')
	},
	output: {
		filename: 'bundle.js',
		// publicPath: __dirname + './dist',
		path: path.join(__dirname, 'dist')
	},
	plugins:[
		new HtmlWebpackPlugin({
		    template: path.resolve(__dirname, 'app/index.html'),
		    filename: 'index.html',
		    inject: 'true'
		}),
		new VueLoaderPlugin()
        // new webpack.HotModuleReplacementPlugin()
        // uglifyPlugin, CommonsChunkPlugin,
        // new ExtractTextPlugin('[name].css'),
        // providePlugin
    ],
    module : {
        rules: [
            {test: /.js$/, exclude: /(node_modules)/, use: ['babel-loader']},
            {test: /.css$/, use: ['style-loader', 'css-loader']},/*解析css, 并把css添加到html的style标签里*/
            //{test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},/*解析css, 并把css变成文件通过link标签引入*/
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
            {test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']},/*解析less, 把less解析成浏览器可以识别的css语言*/
        	{test: /.vue$/, use: ['vue-loader']}
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		progress: true,
        // hot: true,
		overlay: true,  
		stats: "errors-only",  //只打印错误
		port: 5000,
		// host:'0.0.0.0',
		historyApiFallback: {
			rewrites: [
				{from:/./, to:'/404.html'}
			]
		}
	}
}