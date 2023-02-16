const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// 相对路径转绝对路径
const resolvePath = _path => path.resolve(__dirname, _path)

module.exports = {
  entry: resolvePath('./src/index.js'),

  output: {
    path: resolvePath('./dist'),
    clean: true
  },

  module: {
    rules:[{
      test:/\.js$/,
      loader:'clean-log-loader'
    },{
      test:/\.js$/,
      loader:'banner-loader',
      options:{
        author:'Cengfan',
        age:18,
      }
    },{
      test:/\.js$/,
      loader:'babel-loader',
      options:{
        presets: ['@babel/preset-env']
      }
    },{
      test:/\.css$/,
      use: ['style-loader', 'css-loader'],
    }]
    /* rules: [{
      test: /\.js$/,
      loader: 'loader1',
      // enforce: 'pre'
    }, {
      // 无enforce属性，默认为 normal loader
      test: /\.js$/,
      loader: 'loader2',
    }, {
      test: /\.js$/,
      loader: 'loader3',
      // enforce: 'post'
    }] */
    /* rules:[{
      test: /\.js$/,
      loader: 'raw-loader',
    }] */
  },

  resolveLoader: {
    // 默认在 node_modules 与 src/loaders 的目录下寻找loader
    modules: [
      'node_modules',
      resolvePath('./src/loaders')
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('./src/index.html'),
    })
  ],

  mode: 'development'
}