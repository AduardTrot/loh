var namberOfCard  = "123456"

var maskify = cardNamber => {
    n = cardNamber.length
    console.log(n);
    if (n < 3){console.log('Стрка меньше 3 символов');}
    else{
    var str = ''
    for (let i=1; i < n-1 ; i++){   
        var str = str + cardNamber[i]
    }
    console.log(str.length);
   return str}
     
}   
console.log(maskify(namberOfCard));

