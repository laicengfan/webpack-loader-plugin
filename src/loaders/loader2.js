const loader2 = function (content, map, meta) {
  console.log('loader2')
  // this.async 告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback。
  const callback = this.async()
  setTimeout(() => {
    console.log('async loader2')
    // 调用 callback 后，才会执行下一个 loader
    callback(null, content, map, this.data.value)
  },500)
}

const pitch2 = function(remainingRequest, precedingRequest, data) {
  data.value = 999
  console.log('pitch loader2')
  console.log('remainingRequest:',remainingRequest, 'precedingRequest:',precedingRequest, 'data:',data)
}

module.exports = loader2
module.exports.pitch = pitch2
