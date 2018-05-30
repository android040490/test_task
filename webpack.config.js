"use strict;"
const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: [
        'babel-polyfill', 
        "./app.js"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/dist/',
        filename: "bundle.js"
    }, //
    watch: true,

    
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options:{
                    presets:["env", "es2015", "stage-0", "react"]    // используемые плагины
                }
               
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
              },
            // {
            //     test: /\.scss$/, // scss
            //     loader: ExtractTextPlugin.extract({
            //         use: ["style-loader","css-loader", "postcss-loader", "sass-loader"], // npm install scss-loader --save-dev
            //     })
            // }
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 32768,
                            publicPath: './',
                            outputPath: 'uploads/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
        
    ],
    
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
      },
    devServer: {
        historyApiFallback: true
      }
}