var HTMLWebpackPlugin = require('html-webpack-plugin');

HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    title: 'index.html'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
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
