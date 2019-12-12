const JavascriptObfuscator = require('webpack-obfuscator')
module.exports = {
    mode: 'production',
    devtool: "source-map",
    entry: './src/index.js',
    plugins: [
        new JavascriptObfuscator({
            sourceMap: true
        })
    ]
}
