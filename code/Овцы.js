const sheep = 3
let n = 0
const sheepCounter = number => {
    if (number > 0){
        for (let i = 0; i < number; i++){
            n = n + [i + 1] + ' sheep... '
        }
        return n.slice(1)
    }

    else{
        console.log('Число отрицательное');
    }
}

console.log(sheepCounter(sheep))