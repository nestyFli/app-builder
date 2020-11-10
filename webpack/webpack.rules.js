const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
    { 
        test: /\.hbs$/, 
        loader: "handlebars-loader",
        options: {
            helperDirs: path.resolve(process.cwd(), "src/template/helpers")
        }
    },
    {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
        name: 'assets/[hash].[ext]',
        }
    },
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
        ],
    }
]