var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];



function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {

        console.log(match);
        
      if (match == '{0}'){
         return 'Jack'

      }
      else if (match == '{1}'){
       return 'sandwich'

      }
      return match
    }
    propertyName.replace(/{\d}/g, upperToHyphenLower);
}

console.log(styleHyphenFormat(s));

// var str = 'x-x_';
// var retArr = [];
// str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
//   if (p1) { console.log(p1);
//    retArr.push({ on: true, length: p1.length }); }
//   if (p2) {console.log(p2);
  
//        retArr.push({ on: false, length: 1 }); }
// });

// console.log(retArr);