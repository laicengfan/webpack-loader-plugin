// 相对路径转绝对路径
const resolvePath = _path => path.resolve(__dirname, _path)

module.exports = {
  entry: resolvePath('./src/index.js'),

  output: {
    path: resolvePath('./dist'),
    clean: true
  }
}