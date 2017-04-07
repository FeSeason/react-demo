/**
 * Created by zhenjian.hu on 2017/3/17 0012.
 */
const path = require('path')
const webpack = require('webpack')
const precss = require('precss')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取样式
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: false,
    entry: [
        // 'webpack/hot/dev-server',
        // 'webpack-dev-server/client?http://127.0.0.1:8888',
        path.resolve(__dirname, 'src/main.js')
    ],
    resolve: {
        extensions: ['','.js','.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js?v=[hash:8]'
    },
    // postcss: function () {
    //     return {
    //         defaults: [precss, autoprefixer],
    //         cleaner: [autoprefixer({browsers: ["ios >= 7", "android >= 4.0"]})]
    //     };
    // },
    module: {
        loaders: [
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader', exclude: /node_modules/,query: {presets: ['es2015','react']} },
            { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?limit=1024&name=images/[hash:8].[name].[ext]' },
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            // 注意less中使用postcss-loader
            {test: /\.less$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},
            {test: /\.scss$/, loader:  ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')},
        ]
    },
    devServer:{
        port: 8888,
        host: '0.0.0.0',
        proxy: {
            '/proxy': {
                target: '/',
                pathRewrite: {'^/proxy': ''},
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify( process.env.NODE_ENV )
            },
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: { removeAttributeQuotes: false },
            filename: 'index.html',
            title: "网页标题",
            inject: 'body',
        }),
        new ExtractTextPlugin('[name].css?v=[hash:8]', {allChunks: true}),
    ]
}