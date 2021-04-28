// 配置参考 https://cli.vuejs.org/zh/config/
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  },
  chainWebpack (config) {
    if (process.env === 'production') {
      // https://www.npmjs.com/package/css-split-webpack-plugin
      // IE9 will ignore any more than ~4000 selectors in your lovely generated CSS bundle
      config.plugin('ie8-css-split')
        .use(require.resolve("css-split-webpack-plugin").default, [{size: 4000}])
    }
    
  }
}
