function isPowerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
} 

// n=8
// 8/2 = 4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)
// if the remainder is not 0 in any step, `n` is not a power of two
// if the remainder is 0 and `n` comes down to 1 eventually, n is a power of two.

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(6)); // false