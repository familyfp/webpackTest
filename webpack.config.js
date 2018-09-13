const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

module.exports ={
    entry:{
        entry:'./src/entry.js',
        entry2:'./src/entry2.js'
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
        new uglify()
    ],
    devServer: {
        //webpack开发服务
        contentBase:path.resolve(__dirname,'dist'),
        host:'10.5.13.51',
        compress:true,
        port:8090
    }
}