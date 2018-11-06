module.exports = {
  dev: {
    host: 'localhost',
    port: 9090,
    hot: true,
    https: true,
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
