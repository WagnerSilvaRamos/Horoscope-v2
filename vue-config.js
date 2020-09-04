module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader, file-loader")
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
};
