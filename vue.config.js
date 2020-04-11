
const path = require('path');

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
    },
    configureWebpack: config => {
        console.log(' configureWebpack: config => {');
    }
}
