// Write your solution below:

function makeUnique(str) {
    let uiqStr = ""

    for (let i = 0; i < str.length; i++){
        if (uiqStr.includes(str[i])) {
            continue
        } else {
            uiqStr += str[i]
        }
    }
    return uiqStr
}

//OR

function makeUnique2(str) {
    let serSet = new Set(str.split(""))

    return [...serSet].join("")
}

console.log(makeUnique('helloworld'))

console.log(makeUnique2('ttestwhohatwhen'))