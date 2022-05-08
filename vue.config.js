/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-03-31 11:56:23
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-04 23:26:09
 */
const name = process.env.VUE_APP_TITLE;
module.exports = {
    publicPath: "./",
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.TARGET,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: "",
                },
            },
        },
    },
    configureWebpack: {
        name: name,
        plugins: [],
    },
};
