var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var context = path.resolve(__dirname);

module.exports = {
    entry: 'index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.css'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devtool: 'source-map',
    context,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        plugins: [
                            [
                                'react-css-modules',
                                {
                                    // Resolve [path] for css-loader localIdentName option.
                                    // Needs to match webpack config context.
                                    context,
                                    // This needs to match css-loader localIdentName option.
                                    generateScopedName: '[name]__[local]'
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            // Interprets and resolves @import for .css files.
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                // Turn on CSS Modules
                                modules: true,
                                // Allows us to write BEM-like CSS.
                                localIdentName: '[name]__[local]',
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            // Pre/post-process CSS files.
                            // postcss-loader needs to be placed at bottom
                            // to process all .css files first.
                            loader: 'postcss-loader'
                        }
                    ],
                    // Adds CSS to the DOM by injecting a <style> tag.
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            disable: process.env.NODE_ENV === 'development',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main']
        })
    ]
};
