module.exports = {
  dev: {
    host: 'localhost',
    port: 9090,
    hot: true,
    https: false,
    open: false,
    overlay: {
      errors: true,
      warnings: true
    },
    assetsPath: 'src/client/assets',
    notifyOnErrors: true
  },
  build: {}
};
