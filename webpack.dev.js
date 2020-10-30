const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelOptions = {
  presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-class-properties",
  ],
};

module.exports = {
  entry: {
    main: "./demo/src/index.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jp(e*)g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
        ],
      },
    ],
  },
};
