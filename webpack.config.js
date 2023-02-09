const path = require('path')

// 相对路径转绝对路径
const resolvePath = _path => path.resolve(__dirname, _path)

module.exports = {
  entry: resolvePath('./src/index.js'),

  output: {
    path: resolvePath('./dist'),
    clean: true
  },

  module:{
    rules:[{
      test: /\.js$/,
      loader: resolvePath('./src/loaders/loader1.js')
    }]
  },

  mode: 'development'
}