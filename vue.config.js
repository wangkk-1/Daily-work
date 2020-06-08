module.exports = {
    //关闭ESLint的规则
    // lintOnSave: false,
    lintOnSave: 'warning', // 输出提示错误, 但项目继续运行
    //用代理解决跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://182.92.128.115',
                changeOrigin: true //支持跨域
            }
        }
    }
}