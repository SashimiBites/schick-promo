const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

let pagesArray = [
    "index"
];

let multiplesFiles = pagesArray.map(function (entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName + '.html',
        template: `./src/${entryName}.handlebars`,
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        },
        inject: true,
        chunks: [entryName],
    })
});

module.exports = {
    entry: {
        "index": './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].[hash:20].js'
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.handlebars/,
                use: [
                    "handlebars-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "static/",
                        useRelativePath: true
                    }
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.mp4$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "static/",
                        useRelativePath: true
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'static/fonts/'
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-styles.css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ].concat(multiplesFiles)
};