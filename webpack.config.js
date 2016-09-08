var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var webpackConfig = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    externals: {
        //"jquery": "jQuery"
    },
    resolve: {
        extensions: ['', '.js']

    },
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig = merge(webpackConfig,{
        entry : {
            app: './src/index',
        },
        module: {
            loaders: [
                {
                    test: /\.tpl$/, 
                    loaders:'art-template' 
                    include: path.join(__dirname, 'src')
                },
                { 
                    test: /\.(png|jpg|gif|jpeg)$/, 
                    loader: 'url?limit=8192'
                },
                {
                    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                    loader: 'url?limit=8192'
                },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, 'styles/'),
                    loader: 'style!css?sourceMap=true'
                },
            ]},

            plugins : [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify('production')
                    }
                }),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin({minimize: true})
            ]  
    });
}else{
    //webpackConfig.output.publicPath = 'http://localhost:3000/'
    webpackConfig = merge(webpackConfig,{
        devtool: 'eval',
        module: {
            loaders: [
                {
                    test: /\.tpl$/, 
                    loaders:'art-template' 
                    include: path.join(__dirname, 'src')
                },
                { 
                    test: /\.(png|jpg|gif|jpeg)$/, 
                    loader: 'url?limit=8192'
                },
                {
                    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                    loader: 'url?limit=8192'
                },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, 'styles/'),
                    loader: 'style!css?sourceMap=true'
                },
            ]
        },
        entry :{
            app:  [
                'webpack-dev-server/client?http://localhost:3000',
                'webpack/hot/only-dev-server',
                './src/client/index.js',
            ],
        } ,
        plugins : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NoErrorsPlugin()
        ]  
    });
}

module.exports = webpackConfig;
