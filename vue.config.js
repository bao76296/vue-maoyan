
const path = require('path')




module.exports = {
    devServer : {
        port : 8000,
        proxy : {
            '/my' : {
                target : 'http://m.maoyan.com',
                changeOrigin : true,
                pathRewrite : {
                    '^/my': ''
                }
            }
        }
    },
    chainWebpack (config){
        config
            .resolve
            .alias
            .set('@components', path.resolve(__dirname, './src/components'))
            .set('@style', path.resolve(__dirname,'./src/style'))
            .set('@pages', path.resolve(__dirname, './src/pages'))
            .set('@libs', path.resolve(__dirname, './src/lib'))
            .set('@util', path.resolve(__dirname, './src/util'))
    }
}