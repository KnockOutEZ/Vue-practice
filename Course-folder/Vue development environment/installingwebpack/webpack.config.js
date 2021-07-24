const MiniCssExtractorPlugin = require('mini-css-extract-plugin')

module.exports={
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:__dirname +'/dist'
    },
    module:{
        rules:[
            {
                test:/\.js%/,
                exclude:/(node_modules)/,
                use:'babel-loader'
            },
            {
                test:/\.scss$/,
                use:['style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins[
        new MiniCssExtractorPlugin({
            
        })
    ]
}