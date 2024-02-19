const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/contentScript.ts',
    output: {
        filename: 'contentScript.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
      }
};