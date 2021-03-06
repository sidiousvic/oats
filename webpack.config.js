const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  resolve: {
    alias: {
      three$: path.resolve("./src/three.exports.js")
    },
    extensions: [".tsx", ".ts", ".js"]
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
    proxy: {
      "/": "http://localhost:9990"
    }
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.obj$/,
        use: ["file-loader"]
      },
      {
        test: /\.ico$/,
        use: ["file-loader"]
      }
    ]
  }
};
