
'use strict'
const path = require('path');
const defaultSettings = require('./src/settings.js')
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
    //publicPath: '/',
    publicPath: './',
    // outputDir: 'dist',
    outputDir: 'docs',
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
        // before: require('./mock/mock-server.js')
        before: require('./server/mock-server.js')
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
       
        name: name,
        resolve: {
            modules: ['src/views/demo/WebBuilder/GrapesJS/src', 'node_modules'],
            alias: {
                '@': resolve('src'),
                'mock': resolve('mock'),
                // 'asset_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'style_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'block_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'canvas': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'code_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'commands': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'css_composer': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'device_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'dom_components': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'i18n': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'keymaps': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'modal_dialog': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'navigator': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'panels': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'parser': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'rich_text_editor': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'selector_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'storage_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'trait_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'undo_manager': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'utils': resolve('src/views/demo/WebBuilder/GrapesJS/src'),
                // 'utils/extender': resolve('src/views/demo/WebBuilder/GrapesJS/src/utils/extender'),
                // 'utils/mixins': resolve('src/views/demo/WebBuilder/GrapesJS/src/utils/mixins'),
                // 'utils/polyfills': resolve('src/views/demo/WebBuilder/GrapesJS/src/utils/polyfills'),
                
                jquery: 'cash-dom'
            }
        }
    },
    chainWebpack(config) {
        //config.entry('main').add('babel-polyfill')

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

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                    config.optimization.runtimeChunk('single')
                }
            )
    }
}
