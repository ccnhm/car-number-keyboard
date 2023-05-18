const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: "./",
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(__dirname + 'packages') // 注意这里需要绝对路径，所以要拼接__dirname
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
})
