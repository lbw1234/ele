module.exports = {
  devServer: {
    proxy: {
      '/restapi': {
        target: 'https://h5.ele.me',
        changeOrigin: true
      }
    }
  }
}
