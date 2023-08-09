const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "style/var.scss";`
      },
      // sass: {
      //   // @/ 是 src/ 的别名
      //   // 注意：在 sass-loader v7 中，这个选项名是 "data"
      //   prependData: `@import "style/var.scss"`
      // },
    }
  },
  chainWebpack: (config) => {
    config.module.rule('js').include.add('/packages').end().use('babel').loader('babel-loader')
  }
})
