const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'client/dist');
const SRC_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
