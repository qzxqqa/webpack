const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    mode: 'production',
    resolve: {
      extensions: ['.js', 'vue', '.json']
    },
    entry: path.resolve(__dirname, './app/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[hash].js'
    },
    module:{
        rules: [
            {
                test:/\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                use: ['url-loader?limit=8192']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "./app/index.html")
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, "./static/js/flexible.js"),
        //         to: path.resolve(__dirname, "./dist")
        //     }
        // ])
    ],
    devServer: {
        host: 'localhost',
        port: 8003,
        hot: true
    }
}