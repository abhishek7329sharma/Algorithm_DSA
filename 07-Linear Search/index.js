function linearSearch(array, target){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target){
            return i
        }
    }
    return -1
}
let array = [-5, 2, 10, 4, 6]

console.log(linearSearch(array, 10)); //2
console.log(linearSearch(array, 6)); //4
console.log(linearSearch(array, 20)); //-1

// BigO - O(n)