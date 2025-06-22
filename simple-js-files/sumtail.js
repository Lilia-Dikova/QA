function sumAll (num, total = 0) {
    if (num <= 0) {
        return total
    }
    return sumAll(num-1,  total + num)
}

console.log(sumAll(15))

