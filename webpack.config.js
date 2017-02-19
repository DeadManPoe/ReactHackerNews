const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
    entry: './main.js',
    output: {path: __dirname, filename: 'bundle.js'},
    devtool: 'source-maps',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders : [
                    'style-loader',
                    'css-loader?importLoader=1&modules&localIdentName=[name]__[local]',
                    'postcss-loader'
                ]
            },
            {
                test: /.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy',  [
                        'react-css-modules',
                        {
                            "generateScopedName": "[name]__[local]"
                        }
                    ]],
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};