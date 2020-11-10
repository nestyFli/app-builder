const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function getHTMLPlugins(files) {
    return Object.keys(files).map(fileName => {
        return new HtmlWebpackPlugin({
            template: files[fileName],
            filename: `${fileName}.html`,
            minify: false,
            chunks: [fileName]
        })
    })
}

module.exports = function(root) {
    return [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[hash].css'
        }),
        ...getHTMLPlugins(root['.hbs'])
    ]
}