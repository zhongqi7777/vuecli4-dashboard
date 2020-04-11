
const path = require('path');
const fs = require('fs')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,// close eslint
    devServer: {
        port: 4000, // 端口号
        before: require('./mock/mock-server.js')
    },
    chainWebpack(config) {

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        config.plugins.delete('preload')
        config.plugins.delete('prefetch') // 移除 prefetch 插件
    },
    //configureWebpack: config => {
    //     // 动态添加第三方打包好的组件
    //     // 引入 node.js 核心库，获取第三方库文件夹下的文件名数组
    //     const files = fs.readdirSync(path.resolve(__dirname, './dll'));
    //     // 遍历数组，根据指定的条件，生成插件的第三方库加载代码。
    //     files.forEach(file => {
    //         if (/.*\.dll.js$/.test(file)) {
    //             // // 添加指定的文件，到 html 文件中去。
    //             config.plugins.push(new AddAssetHtmlWebpackPlugin({
    //                 filepath: path.resolve(__dirname, './dll', file),
    //                 // 文件输出目录
    //                 outputPath: 'lib',
    //                 // 脚本或链接标记的公共路径
    //                 publicPath: 'lib'
    //             }))

    //         }
    //         if (/.*\.manifest.json/.test(file)) {
    //             // 这个插件避免 webpack 重复打包第三方库，如果要打包第三方库，会先到这个映射文件中去找，已经打包好的。
    //             plugins.push(new webpack.DllReferencePlugin({
    //                 manifest: path.resolve(__dirname, './dll', file)
    //             }))
    //         }
    //     })

    // }
}
