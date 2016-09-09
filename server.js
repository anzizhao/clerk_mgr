var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config');
var listenPort = 3100 

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,  //1.14 webpack-dev-server bug 
    historyApiFallback: true
}).listen( listenPort, 'localhost', function(err, result) {
  if (err) {
    console.log(err)
  }
  console.log('Listening at localhost:',  listenPort)
})
