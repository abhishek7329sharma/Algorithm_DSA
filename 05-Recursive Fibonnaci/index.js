function rescursiveFibonaaci(n){
    if(n < 2){
        return n
    }
    return rescursiveFibonaaci(n-1) + rescursiveFibonaaci(n-2)
}
console.log(rescursiveFibonaaci(0)); //0
console.log(rescursiveFibonaaci(1)); //1
console.log(rescursiveFibonaaci(2)); //1
console.log(rescursiveFibonaaci(6)); //8

// rescursiveFibonaaci(0) = 0
// rescursiveFibonaaci(1) = 1
// rescursiveFibonaaci(2) = 1
// rescursiveFibonaaci(6) = 8

// Big-O -  2^n