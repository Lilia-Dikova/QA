function factorial (num, acc = 1) {
    if (num === 0) {
        return acc
    }
    return factorial(num - 1, num * acc)
}


function factorialIteration (num) {
    let result = 1;

    while (num > 0 ) {
        result*= num;
        num --;
    }
    return result
}

console.log(factorialIteration(1))

console.log(result)