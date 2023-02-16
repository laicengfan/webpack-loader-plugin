const loader1 = function (content, map, meta) {
  console.log('loader1',content, map, meta)
  /* 
    param1：error 是否有错误
    param2：content 处理后的内容
    param3：source-map 信息可继续传递 source-map
    param4：meta 给下一个 loader 传递的参数
  */
  this.callback(null, content, map, meta)
}

const pitch1 = function(remainingRequest, precedingRequest, data) {
  console.log('pitch loader1')
  console.log('remainingRequest:',remainingRequest, 'precedingRequest:',precedingRequest, 'data:',data)
}

module.exports = loader1
module.exports.pitch = pitch1