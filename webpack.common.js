const path = require('path');

module.exports = {
  entry: {}, // Explicitly set no entry points for static-only site

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // Add cache busting for better performance
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].chunk.js",
    assetModuleFilename: "assets/[name].[contenthash:8][ext]",
  },

  // Resolve optimizations
  resolve: {
    extensions: [".js", ".json"],
    // Reduce module resolution time
    modules: [path.resolve(__dirname, "node_modules")],
  },

  // Performance and caching
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },

  // Stats optimization for cleaner output
  stats: {
    assets: true,
    builtAt: true,
    modules: false,
    source: false,
    version: false,
    publicPath: false,
    entrypoints: false,
  },
};
