const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

module.exports ={
    entry:{
        entry:'./src/entry.js'
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        // new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        })
    ],
    devServer: {
        //webpack开发服务
        contentBase:path.resolve(__dirname,'dist'),
        host:'10.5.13.51',
        compress:true,
        port:8090
    }
}