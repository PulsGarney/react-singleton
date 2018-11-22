const path = require('path');


module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/SyncState.js'),
  },
  output: {
    filename: 'sync.umd.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'react-sync-state',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    ],
  },
};
