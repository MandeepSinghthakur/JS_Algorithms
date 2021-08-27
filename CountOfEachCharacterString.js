function charCount(str) {
    var result = {}
    for (var char of str) {
        if (isAlphaNumeric(char)) {
           var char = char.toLowerCase()
           result[char] = ++ result[char] || 1
        }
    }
    return result
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
        !(code > 64 && code <91) &&
        !(code >96 && code <123)) {
            return false;
        }
    return true;
}
