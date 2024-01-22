const path = require("path");

module.exports = {
  entry: {
    content: "./scripts/content.ts",
    background: "./scripts/background.ts",
  },
  output: {
    path: path.resolve(__dirname, "./dev"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
