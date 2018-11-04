module.exports = {
  dev: {
    host: '0.0.0.0',
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
