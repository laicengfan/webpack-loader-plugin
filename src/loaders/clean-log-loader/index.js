const cleanLogLoader = function (content) {
    // 使用正则将 content 文件中所有不带 '@' 的 console 语句替换成空
    return content.replace(/console\.log\([^@]*\);?/g, '')
}

module.exports = cleanLogLoader