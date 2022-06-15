const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    app: require.resolve("./src/index"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        use: [
          { loader: "json-loader" },
          {
            loader: "yaml-loader",
            options: {
              asJSON: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets"),
          to: path.resolve(__dirname, "dist"),
        },
        path.resolve(__dirname, "assets", "favicon.ico"),
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(
            "node_modules/swagger-ui/dist/oauth2-redirect.html"
          ),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: outputPath,
  },
};
