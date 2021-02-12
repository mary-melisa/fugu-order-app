const webpack = require('webpack');
const path = require('path');
// const utils = require('./src/config/utils')

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    runtimeCompiler: false,
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        modules: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    require('autoprefixer')(),
                    require('postcss-pxtorem')({
                        rootValue: 75,
                        propList: ['*'],
                        selectorBlackList: [
                            ".van-checkbox__icon",
                        ]
                    })
                ]
            },
            sass: {
                data: `
                    @import "@/assets/css/theme/reset.scss";
                    @import "@/assets/css/theme/color.scss";
                    @import "@/assets/css/theme/mixin.scss";
                    @import "@/assets/css/theme/common.scss";
                `
            }
        }
    },
    
    chainWebpack: config => {
        // 处理重新加载时候不加载WebWorker代码的问题
        // config.module.rule("js").exclude.add(/\.worker\.js$/);
        config.optimization.minimize(true);
        config.optimization.splitChunks({ chunks: 'all' });

        config.resolve.alias
            .set('@', path.resolve('src'))
            .set('@assets', path.resolve('src/assets'))
     
        const imagesRule = config.module.rule('images');
        imagesRule.uses.clear();
        imagesRule
            .use('file-loader')
            .loader('url-loader')
            .options({
                limit: 10000,
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }
            });

        // config.module
        //     .rule('proto')
        //     .test(/\.(proto)(\?.*)?$/)
        //     .use('file-loader')
        //     .loader('file-loader')
        //     .options({
        //         fallback: {
        //             loader: 'file-loader',
        //             options: {
        //                 name: utils.assetsPath('files/[name].[hash:7].[ext]')
        //             }
        //         }
        //     })
        //     .end()
        // config.module
        //     .rule('worker')
        //     .test(/\.worker\.js$/)
        //     .use()
        //     .loader('worker-loader')
    },
    configureWebpack: {
        plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
        devtool: 'eval-source-map'
    },
    devServer: {
        open: true,
        port: 3000,
        https: false,
        hotOnly: false,
        overlay: {
            warnings: true,
            errors: true
        },
        //代理配置
        // proxy: {
        //     '/api': {
        //         target: 'https://m.kuaidi100.com/app/query/', //对应自己的接口
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    }
};
