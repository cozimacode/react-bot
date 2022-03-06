const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "ReactBot",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    react: {
      commonjs: "React",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      commonjs: "ReactDOM",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jp(e*)g|gif)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
    ],
  },
};
