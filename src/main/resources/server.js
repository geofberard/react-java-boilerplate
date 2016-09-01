var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: "./public",
    hot: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    proxy: {
      "*": "http://localhost:8080"
    }
}).listen(8081, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:8081/');
});