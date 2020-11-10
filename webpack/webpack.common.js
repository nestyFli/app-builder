require('dotenv').config()

const reader = require('./reader')
const getPlugins = require('./webpack.plugins')
const rules = require('./webpack.rules')
const files = reader(['src/js', 'src/template/pages'] , { '.js': {}, '.hbs': {} })

module.exports =  {
    entry: files['.js'],
    output: {
        filename: 'assets/[name].[hash].js'
    },
    module: {
        rules
    },
    plugins: getPlugins(files)
}