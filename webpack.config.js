var HelloWorldPlugin = require("./hello-world.js");

module.exports = {
  entry: {
		js: './main.js',
		coffee: './test.coffee'
	 }, 
  output: {
    path: "build", 
    publicPath: 'http://mycdn.com/', // 这个用来成成比如图片的 URL
    filename: '[name].js'       
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // 用 ! 来连接多个人 loader
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
    ]
  },
  resolve: {
    // 现在可以写 require('file') 代替 require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  },
  plugins: [
    new HelloWorldPlugin({options:true})
  ]

};
