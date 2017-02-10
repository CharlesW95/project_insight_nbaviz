var HTMLWebpackPlugin = require('html-webpack-plugin');

HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    title: 'index.html'
});

module.exports = {
    entry: [
        './app/index.js',
    ],
    module: {
        loaders: [
            {
                test: /\js$/,
                // Load components into memory for later use
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig]
};
