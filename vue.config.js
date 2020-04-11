
'use strict'
const path = require('path');
const defaultSettings = require('./src/settings.js')
const fs = require('fs')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vuecli4-dashboard 2021' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 7143 // dev port

module.exports = {
    /**
  * You will need to set publicPath if you plan to deploy your site under a sub path,
  * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
  * then publicPath should be set to "/bar/".
  * In most cases please use '/' !!!
  * Detail: https://cli.vuejs.org/config/#publicpath
  */
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    // lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        quiet: false,
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
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
    configureWebpack: config => {
        // 动态添加第三方打包好的组件
        // 引入 node.js 核心库，获取第三方库文件夹下的文件名数组
        const files = fs.readdirSync(path.resolve(__dirname, './dll'));
        // 遍历数组，根据指定的条件，生成插件的第三方库加载代码。
        files.forEach(file => {
            if (/.*\.dll.js$/.test(file)) {
                // // 添加指定的文件，到 html 文件中去。
                config.plugins.push(new AddAssetHtmlWebpackPlugin({
                    filepath: path.resolve(__dirname, './dll', file),
                    // 文件输出目录
                    outputPath: 'lib',
                    // 脚本或链接标记的公共路径
                    publicPath: 'lib'
                }))

            }
            if (/.*\.manifest.json/.test(file)) {
                // 这个插件避免 webpack 重复打包第三方库，如果要打包第三方库，会先到这个映射文件中去找，已经打包好的。
                plugins.push(new webpack.DllReferencePlugin({
                    manifest: path.resolve(__dirname, './dll', file)
                }))
            }
        })

    }
}
