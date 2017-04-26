var webpack = require('webpack')
// 引入css 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
//var packCSS = new ExtractTextPlugin('./css/[name].min.css'); 
module.exports = {
  entry: {
  	register1:'./entry/entry1.js',
  	register2:'./entry/entry2.js',
  	register3:'./entry/entry3.js'
  
  },
  
  output: {
    path: __dirname+"/public",
    filename: '[name].js'
    
  },
  module: {
    loaders: [
      //{test: /\.css$/, loader: 'postcss-loader'},
      { test:/\.css$/,loader:ExtractTextPlugin.extract('style','css')},
      //{ test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
      { test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/fonts" },//解决icon-font加载问题
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/fonts" },
	  { test: /\.eot$/,  loader: "file-loader" },
	  { test: /\.json$/, loader: 'json'},
	  { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=fonts" }
    ]
  },
  plugins: [
  	new ExtractTextPlugin("[name].css"),
    new webpack.BannerPlugin('This file is created by FangJiaLiang'),
    new webpack.ProvidePlugin({ 
	     $:"jquery", 
	     jQuery:"jquery", 
	     "window.jQuery":"jquery" 
    })
  ]
}