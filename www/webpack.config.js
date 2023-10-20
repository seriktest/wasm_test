const path = require("path");
const CopyWabpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: "./bootstrap.js",
    output: {
        filename: "bootstrap.js",
        path: path.resolve(__dirname, "public")
    },
    mode: "development",
    plugins: [
        new CopyWabpackPlugin({
            patterns: [
                {
                    from: "./index.html",
                    to: "./"
                }
            ]
        })
    ]
}