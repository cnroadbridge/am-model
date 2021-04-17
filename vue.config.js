const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: !isProd,
  publicPath: isProd ? '/am-model/dist/' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', '/src')
      .set('@assets', resolve('/src/assets'))
      .set('@scss', resolve('/src/assets/scss'))
      .set('@components', resolve('/src/components'))
      .set('@plugins', resolve('/src/plugins'))
      .set('@views', resolve('/src/views'))
      .set('@router', resolve('/src/router'))
      .set('@store', resolve('/src/store'))
      .set('@layouts', resolve('/src/layouts'))
      .set('@static', resolve('/src/static'))
      .set('@api', resolve('/src/api'))
      .set('@utils', resolve('/src/utils'))
      .set('@mixins', resolve('/src/mixins'))
      .set('@config', resolve('/src/config'))
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
