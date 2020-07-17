// const year1 = 200


// const leapYear = year => {
    
//     if (Number.isInteger(year) && year > 0){

//         if (year % 400 == 0){
//             console.log('Високосный год');
//         }
//         else if (year % 100 == 0){
//             console.log('Не високосный год');
//         }
//         else if (year % 4 == 0){
//             console.log('Високоный год');
//         }
//         else{console.log('Не високосный год');}
//     }
//     else{
//         console.log('Неправильная форма записи');
//     }
// }

// leapYear(year1)

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];



function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {

        console.log(match);
        
      if (match == String({0})){
         return a[0]

      }
      else if (match == String({1})){
       return a[1]

      }
    }
    propertyName.replace(/{\d}/g, upperToHyphenLower);
}
console.log(styleHyphenFormat(s));