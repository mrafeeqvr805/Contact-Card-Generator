const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mainjs: resolve(__dirname, 'index.js'),
      }
    }
  }
}