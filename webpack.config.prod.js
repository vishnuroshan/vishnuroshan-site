const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: false, // Prevent automatic injection of app.js
    }),
    new CopyPlugin({
      patterns: [
        { from: "banner.webp", to: "banner.webp" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "favicon.svg", to: "favicon.svg" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "icon.svg", to: "icon.svg" },
        { from: "404.html", to: "404.html" },
        { from: "favicon-96x96.png", to: "favicon-96x96.png" },
        { from: "apple-touch-icon.png", to: "apple-touch-icon.png" },
        {
          from: "web-app-manifest-192x192.png",
          to: "web-app-manifest-192x192.png",
        },
        {
          from: "web-app-manifest-512x512.png",
          to: "web-app-manifest-512x512.png",
        },
        { from: "site.webmanifest", to: "site.webmanifest" },
        { from: "main.css", to: "main.css" },
        { from: "blog.css", to: "blog.css" },
        { from: "blog", to: "blog" },
        { from: "sitemap.xml", to: "sitemap.xml" },
        { from: "humans.txt", to: "humans.txt" },
        { from: ".well-known/security.txt", to: ".well-known/security.txt" },
        // { from: '.well-known/ai-plugin.json', to: '.well-known/ai-plugin.json' }
      ],
    }),
  ],
});
