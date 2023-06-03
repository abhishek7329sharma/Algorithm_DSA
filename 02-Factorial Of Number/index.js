function factorial(n) {
    let result = 1;
    for (let i = 2; i <=n; i++) {
        result=result*i;
    }
    return result;
}
console.log(factorial(0)); // 1
console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(6)); // 6*5*4*3*2*1 = 720