const path = require("path");

module.exports = {
    entry: [
        "babel-polyfill",
        //    "webpack/hot/only-dev-server",
        "./src/index.ts"
    ],
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: __dirname + "/dist/"
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        // hot: true, // New
        historyApiFallback: true
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /(\.css|scss)$/,
                exclude: [/node_modules/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "resolve-url-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
