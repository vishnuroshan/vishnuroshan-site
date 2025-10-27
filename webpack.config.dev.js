const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",

  // Faster rebuilds for development
  devtool: "eval-source-map", // Faster than inline-source-map

  // Optimize for development speed
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  output: {
    pathinfo: false, // Faster builds
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: false,
    }),
  ],

  devServer: {
    static: {
      directory: __dirname,
      publicPath: "/",
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,

    // Performance optimizations
    devMiddleware: {
      writeToDisk: false, // Keep files in memory
    },

    // Better error handling
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  // Faster file watching
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: false,
  },
});
