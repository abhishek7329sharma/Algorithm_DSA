function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(target === array[middleIndex]){
            return middleIndex
        }
        if(target < array[middleIndex]){
            rightIndex = middleIndex - 1    
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
let array = [-5, 2, 4, 6, 10, 13]

console.log(binarySearch(array, 10)); //4
console.log(binarySearch(array, 6)); //3
console.log(binarySearch(array, 20)); //-1
