const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  // Performance optimizations
  performance: {
    hints: "warning",
    maxEntrypointSize: 250000, // 250kb
    maxAssetSize: 200000, // 200kb - Now that favicon is reduced
    // Filter out large image assets from performance warnings
    assetFilter: function (assetFilename) {
      // Only warn about these specific large assets if they exceed limits
      const expectedLargeAssets = [
        "web-app-manifest-512x512.png", // ~295KB - expected for 512x512 icon
        "banner.webp", // ~100KB - acceptable for banner image
      ];

      // Don't warn about these expected large assets
      if (expectedLargeAssets.some((asset) => assetFilename.includes(asset))) {
        return false;
      }

      // Warn about everything else including favicon.svg if it's still large
      return true;
    },
  },

  optimization: {
    minimizer: [
      // Optimize JavaScript
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true,
            pure_funcs: ["console.log"], // Remove specific function calls
          },
          mangle: true,
          format: {
            comments: false, // Remove comments
          },
        },
        extractComments: false,
      }),
      // Optimize CSS
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              mergeRules: true,
            },
          ],
        },
      }),
    ],

    // Enable tree shaking
    usedExports: true,
    sideEffects: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeAttributeQuotes: true,
        sortAttributes: true,
        sortClassName: true,
      },
      inject: false, // Prevent automatic injection since it's a static site
    }),

    new CopyPlugin({
      patterns: [
        // Images with optimization hints
        {
          from: "banner.webp",
          to: "banner.webp",
          info: { minimized: true },
        },
        {
          from: "favicon.ico",
          to: "favicon.ico",
          info: { minimized: true },
        },
        {
          from: "favicon.svg",
          to: "favicon.svg",
          info: { minimized: true },
        },
        {
          from: "icon.png",
          to: "icon.png",
          info: { minimized: true },
        },
        {
          from: "icon.svg",
          to: "icon.svg",
          info: { minimized: true },
        },
        {
          from: "favicon-96x96.png",
          to: "favicon-96x96.png",
          info: { minimized: true },
        },
        {
          from: "apple-touch-icon.png",
          to: "apple-touch-icon.png",
          info: { minimized: true },
        },
        {
          from: "web-app-manifest-192x192.png",
          to: "web-app-manifest-192x192.png",
          info: { minimized: true },
        },
        {
          from: "web-app-manifest-512x512.png",
          to: "web-app-manifest-512x512.png",
          info: { minimized: true },
        },

        // Static files
        { from: "robots.txt", to: "robots.txt" },
        { from: "404.html", to: "404.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
        { from: "sitemap.xml", to: "sitemap.xml" },
        { from: "humans.txt", to: "humans.txt" },

        // CSS files with cache busting
        {
          from: "main.css",
          to: "main.css",
          // Add hash to filename for better caching
          // to: "main.[contenthash:8].css" // Uncomment if you want hash-based caching
        },
        {
          from: "blog.css",
          to: "blog.css",
          // to: "blog.[contenthash:8].css" // Uncomment if you want hash-based caching
        },

        // Directories
        {
          from: "blog",
          to: "blog",
          globOptions: {
            ignore: ["**/.DS_Store"], // Ignore system files
          },
        },

        // Security files
        {
          from: ".well-known/security.txt",
          to: ".well-known/security.txt",
        },
        // { from: '.well-known/ai-plugin.json', to: '.well-known/ai-plugin.json' }
      ],

      options: {
        concurrency: 100, // Speed up copying
      },
    }),
  ],
});
