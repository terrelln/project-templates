const path = require("path");

module.exports = {
  mode: "development",
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: "inline-source-map",
  entry: "./src/sketch.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "sketch.js",
    path: path.resolve(__dirname, "dist"),
  },
};
