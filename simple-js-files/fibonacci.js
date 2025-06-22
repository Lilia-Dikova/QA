function fibonacci  (num) {
    if  (num == 1) {
        return 0
    }
    if (num == 2) {
        return 1
    }
    return fibonacci (num - 1) + fibonacci (num - 2)
}

function go (num) {
    for (let i = 1; i <= num; i++) {
        console.log(fibonacci(i))
    }
}

go(8)