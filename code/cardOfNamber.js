var namberOfCard  = "123493355555"


var maskify = cardNamber => {
    n = cardNamber.length
    var str = ''
    for (let i=0; n-i > 4 ; i++){   
        var str = str + '#'
    }
    var str1 = ''
    for (let i=n-1; n-i < 5 ; i--){   
        var str1 = str1 + cardNamber[i]
    }
var str2 = str1.split('').reverse().join('')
    str3 = str + str2
    return str3
}   
console.log(maskify(namberOfCard));


