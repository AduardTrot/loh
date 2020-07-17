// var divs = document.querySelectorAll('div')
// var link = document.querySelector('a')
// for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function(event){
//         event.stopPropagation()
//         console.log(this.getAttribute('id'))
//     })
// }
// link.addEventListener('click', handleLinkClick)

// function handleLinkClick(event){
//     event.preventDefault()

//     var div = divs[0]

    
//     div.style.display = div.style.display === 'none'? 'flex' :'none'
//     console.log(div.style.display)
// }
var h1= document.querySelector('h1')
var div = document.querySelector('#parapa')

div.innerHTML = '<h2 style= "color: red;">From javascript</h2>'
console.log(div.innerHTML);
h1.textContent = 'Какаха приди'
console.log(h1.textContent);


