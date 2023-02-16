const loader3 = function (content, map, meta) {
  console.log('loader3')
  this.callback(null, content, map, meta)
}

const pitch3 = function(remainingRequest, precedingRequest, data) {
  console.log('pitch loader3')
  console.log('remainingRequest:',remainingRequest, 'precedingRequest:',precedingRequest, 'data:',data)
}
module.exports = loader3
module.exports.pitch = pitch3
