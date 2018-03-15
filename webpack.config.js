var StringReplacePlugin = require('string-replace-webpack-plugin')
var dict = require('./src/dict/dict')
var exp = []
var webpack = require('webpack')

for (const key in dict) {
  if (dict.hasOwnProperty(key)) {
    exp.push(
      {
        entry: {
          index: './src/index.js',
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        output: {
          path: __dirname + '/public/web/js/' + key,
          filename: 'bundle.js',
          chunkFilename: 'chunk.[name].js',
          publicPath: '/web/js/' + key + '/',
        },
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: StringReplacePlugin.replace({
                replacements: [
                  {
                    pattern: /({\|)[A-Za-z0-9\s]+(\|})/ig,
                    replacement (match) {
                      return dict[key][match.slice(2, -2)] || ''
                    },
                  },
                ],
              }),
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
            },
          ],
        },
        plugins: [
          new StringReplacePlugin(),
          new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.react.js',
            minChunks: Infinity,
          }),
        ],
      }
    )
  }
}

module.exports = exp
