function recursiveFactorial(n){
    if(n === 0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}

// 5! = 5*4*3*2*1 = 5 * 4!
// 4! = 4*3*2*1   = 4 * 3!
// 3! = 3*2*1     = 3 * 2!
// 2! = 2*1       = 2 * 1!
// 1! = 1*1       = 1 * 1
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120
console.log(recursiveFactorial(6)); // 720