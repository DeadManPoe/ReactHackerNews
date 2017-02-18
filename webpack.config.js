module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    devtool : 'source-maps',
    module: {
        loaders: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
};