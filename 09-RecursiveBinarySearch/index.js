function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1)
}
function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

let array = [-5, -2, 2, 4, 6, 8, 13]
console.log(recursiveBinarySearch(array, 4))
console.log(recursiveBinarySearch(array, 8))
console.log(recursiveBinarySearch(array, 13))
console.log(recursiveBinarySearch(array, 100))