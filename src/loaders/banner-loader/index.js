const schema = require('./schema.json')

const bannerLoader = function (content) {
  // 使用引入的 schema 验证获取的 options，options 在 webpack.config.js 中使用本 loader 时传递
  const options = this.getOptions(schema)
  const prefix = `
    /*
    * Author: ${options.author}
    * age: ${options.age}
    */
  `;

  return prefix + content
}

module.exports = bannerLoader