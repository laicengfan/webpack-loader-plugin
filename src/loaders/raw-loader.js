const rawLoader = function(content) {
    console.log(content)
    return content
}

rawLoader.raw = true

module.exports = rawLoader