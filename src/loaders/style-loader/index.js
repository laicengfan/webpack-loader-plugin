const styleLoader = function(content){}
const styleLoaderPitch = function(remainingRequest) {
  /* 
    将绝对路径：
      C:\Front End\projects\webpack-loader-plugin\node_modules\css-loader\dist\cjs.js!C:\Front End\projects\webpack-loader-plugin\src\css\index.css
    转换为相对路径：
      ../../node_modules/css-loader/dist/cjs.js!./index.css
  */
  const resolvePath = remainingRequest.split('!').map(absolutePath => {
    // 通过本 loader 所在的上下文环境和绝对路径，返回一个相对路径
    return this.utils.contextify(this.context,absolutePath)
  }).join('!')
  // 创建 style 标签，将 css-loader 处理后的内容插入到 html 中
  // '!!' 在 inline loader内跳过 pre，normal，post loader的执行，这里跳过引入的 css loader 后续阶段的执行
  const script = `
    import style from '!!${resolvePath}'
    const styleEl = document.createElement('style')
    styleEl.innerHTML = style 
    document.head.appendChild(styleEl)
  `

  // 熔断后续 loader 的执行
  return script
}
module.exports = styleLoader
module.exports.pitch = styleLoaderPitch
