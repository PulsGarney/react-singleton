const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.tmpl.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader?minimize',
      },
    ],
  },
};
