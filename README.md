## webpack遇到的问题
1. webpack非全局安装后，在代码中输入webpack，提示不是内部命令

```
//解决方法
在package.json的script里配置
script:{
    "bulid":"webpack"
}
这时运行：npm run build即可打包
```

2. 安装webpack-dev-server 后配置package.json里的script为server：webpack-dev-server后运行：npm run server打开静态服务报错:提示什么关于webpack-cli的问题

```
//解决方法
这是因为自己安装了webpack-cli，先卸载：npm uninstall webpack-cli -g

```
## webpack配置文件

```
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');//不需要npm  install
const htmlPlugin = require('html-webpack-plugin');//需要npm install

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
```
