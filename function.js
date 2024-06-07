
function findAmount(amount) {
    let nextAmount = amount + 1
    
    while(true) {
        let tax = Math.round(nextAmount * 0.15)
        if (nextAmount - tax === amount) {
            return nextAmount
        } 
        nextAmount++
    }
}

let test = findAmount(1800000)
console.log(test)
