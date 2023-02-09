const loader1 = function (content, map, meta) {
  console.log('loader1',content)
  return content
}

module.exports  = loader1