var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js(x?)$/,
            loaders: ["babel-loader"],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.scss$/,
            loaders: [
                "style-loader", {
                    loader: "css-loader",
                    query: {
                        modules: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    }
                }, "sass-loader"
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Egnyte Recruitment Task",
            filename: "index.html"
        })
    ]
};
