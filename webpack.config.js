// LICENSE : MIT
"use strict";
module.exports = {
    context: __dirname,
    entry: "./lib/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: '6to5-loader'}
        ]
    }
};