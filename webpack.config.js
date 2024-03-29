const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/ts/contentScript.ts',
    output: {
        filename: 'contentScript.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    devtool: false,
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })],
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
      }
};