const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './script/main.jsx', // Input 
    output: {
        path: path.resolve(__dirname, 'dist'), // Output - Dynamically generated filenames 
        filename: '[name].[contenthash].js',
        publicPath: '/webpack-test/', // Adding this make npx webpack serve not work...
        // publicPath:'/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Transpile JS and JSX
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic', // Enables the main.jsx to transform
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.css$/, // Handles CSS imports
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Handles image imports
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.pdf$/, // Handles PDF imports
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'pdfs/', // Specify the output directory for PDFs
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Import without extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            base: '/webpack-test/', 
        })
    ],
    mode: 'production',
    optimization:{
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: false, // Removes console.log() statements
                    },
                },
            }), // Minify Javascript
            new CssMinimizerPlugin(), // Minify CSS
        ],
        usedExports: true,
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'source-map',
    devServer: {
        port: 5001,
        hot: true,
        open: true,
        historyApiFallback: true, // Server index.html for all 404 responses
    },
    performance: {
        maxAssetSize: 10000000, 
        maxEntrypointSize: 10000000,
    }
};