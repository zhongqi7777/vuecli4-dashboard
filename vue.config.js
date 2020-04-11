
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

//API_ROOT,用来打包
if (process.env.NODE_ENV === 'development') {
    process.env.VUE_APP_API_ROOT = '/mock'
    //process.env.VUE_APP_BASE_API = ''//base_url
} else {
    process.env.VUE_APP_API_ROOT = '/api'
    //process.env.VUE_APP_BASE_API = ''//base_url
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
    }
}
