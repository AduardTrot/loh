const telefonNamber  = [9,9,9,1,2,5,4,0,4,5]
let n = 0
let z = 0
const wholeNamber = arrayNamber => {
    
    for (let i = 0; i < arrayNamber.length; i++){
        if (arrayNamber[i] < 10){
            n++
        }
        else {
            break
        }
    }

    if (n == 10){
        for (let i = 0; i < arrayNamber.length; i++){
            let v = arrayNamber[i]
            if (Number.isInteger(v)
            ){
                z++
            }
             else {
                 console.log('Научись отличать целые числа от дробных ИДИОТ!!!');
                 break
            }
        }
    }
    else {
    console.log('Придурок введи правильно номер!!!');
    }

    if (z >= arrayNamber.length){
        console.log(
            '('+ 
            arrayNamber[0] + 
            arrayNamber[1] + 
            arrayNamber[2] +
            ')'+
            ' '+
            arrayNamber[3] + 
            arrayNamber[4] + 
            arrayNamber[5] +
            '-'+
            arrayNamber[6] + 
            arrayNamber[7] + 
            '-'+
            arrayNamber[8] + 
            arrayNamber[9]
        );
    }
}

wholeNamber(telefonNamber)






// var maskify = cardNamber => {
//     n = cardNamber.length
    
//     if (    for (let i=1; i < n-1 ; i++){   
//         var str = str + cardNamber[i])
//         {console.log('Стрка меньше 3 символов');})
//     else {
//     var str = ''
//     for (let i=1; i < n-1 ; i++){   
//         var str = str + cardNamber[i]
//     }
    
//    return str
//   }
      
// }   
// console.log(maskify(namberOfCard))

