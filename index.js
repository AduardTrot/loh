var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $timHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $result = document.querySelector('#result')
var $gameTime = document.querySelector('#game-time')
var color = ['red', 'gren', 'yellow']
var score =0
var isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function startGame ( ) {
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')
    show($timHeader)
    hide($resultHeader)
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    hide($start)

    var interval = setInterval(function() {
        var time = parseFloat($time.textContent)
        console.log('interval', $time.textContent)
        if (time <= 0){
            clearInterval(interval)
            endGame()
            
    } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
       
    }, 100)
    

    renderBox()
}
function show($el){
    $el.classList.remove('hide')

}
function hide($el){
    $el.classList.add('hide')
}
function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime(){
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timHeader)
    hide($resultHeader)
}

function endGame(){
    $gameTime.removeAttribute('disabled', 'false')
    isGameStarted = false
    setGameScore()
    show($start)
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timHeader)
    show($resultHeader)
}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
 }

function renderBox() {
        $game.innerHTML = ''
        var box = document.createElement('div')
        var boxSize = getRandom(30, 100)
        var gameSize =$game.getBoundingClientRect()
        var maxTop = gameSize.height - boxSize
        var maxLeft = gameSize.width - boxSize
        var randomColor = getRandom(0, color.length)     
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    

    box.style.backgroundColor =  color[randomColor]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max){
return Math.floor(Math.random() * (max - min) + min)
}
