var StringReplacePlugin = require('string-replace-webpack-plugin')
var dict = require('./dict')
var exp = []

for (const key in dict) {
  if (dict.hasOwnProperty(key)) {
    exp.push(
      {
        entry: {
          index: ['babel-polyfill', './src/index.js']
        },
        output: {
          path: __dirname + '/public/web/js/' + key,
          filename: 'bundle.js',
          chunkFilename: 'chunk.[name].js',
          publicPath: '/web/js/' + key + '/'
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: StringReplacePlugin.replace({
                replacements: [
                  {
                    pattern: /({\|)[A-Za-z0-9\s]+(\|})/ig,
                    replacement: function (match) {
                      return dict[key][match.slice(2, -2)] || ''
                    }
                  }
                ]
              })
            },
            {
              test: /\.js$/,
              loader: 'babel-loader'
            }
          ]
        },
        plugins: [
          new StringReplacePlugin()
        ]
      }
    )
  }
}

module.exports = exp
