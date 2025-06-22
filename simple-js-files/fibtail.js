function fibonacci (num, curr = 0, prev = 1) {
    if (num === 1) {
        return curr
    }
    return fibonacci(num-1, prev, curr + prev)
}

console.log(fibonacci(8))