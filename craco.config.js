module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "vm": require.resolve("vm-browserify")
      };
      return webpackConfig;
    }
  }
};