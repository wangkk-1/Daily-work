module.exports = {
    //关闭ESLint的规则
    lintOnSave: false,
    //用代理解决跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://182.92.128.115',
                changeOrigin: true
            }
        }
    }
}
