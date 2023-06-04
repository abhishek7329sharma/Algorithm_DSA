## isPowerOfTwo Function - Code Explanation

The following code checks whether a given number 'n' is a power of two.

### Code

```javascript
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(6)); // false
```

## Algorithm Explanation
1. The code defines a function called isPowerOfTwo that takes a parameter n, representing the number to be checked.

2. The code first checks if n is less than 1. If so, it returns false since powers of two are always greater than or equal to 1.

3. A while loop is initiated, which continues as long as n is greater than 1.

4. Inside the loop, the code checks if n is not divisible by 2 (i.e., n % 2 !== 0). If so, it means n is not a power of two, and the function returns false.

5. If the code reaches this point, it means n is divisible by 2. The code then updates the value of n by dividing it by 2 (n = n / 2).

6. The loop continues until n becomes 1. If at any point the remainder is not 0, n is not a power of two, and the function returns false. Otherwise, if n reaches 1, it means n is a power of two, and the function returns true.

## Example
- Let's consider a few examples with different input values:

- When isPowerOfTwo(1) is called, the output is true. This is because 1 is considered a power of two.

- When isPowerOfTwo(2) is called, the output is true. This is because 2 is a power of two.

- When isPowerOfTwo(3) is called, the output is false. This is because 3 is not a power of two since it is not divisible by 2.

- When isPowerOfTwo(4) is called, the output is true. This is because 4 is a power of two.

- When isPowerOfTwo(5) is called, the output is false. This is because 5 is not a power of two since it is not divisible by 2.

- When isPowerOfTwo(6) is called, the output is false. This is because 6 is not a power of two since it is not divisible by 2.

- The code checks if the given number is a power of two by repeatedly dividing it by 2 until it reaches 1. If at any point the remainder is not 0, the number is not a power of two, and the function returns false. Otherwise, if the number reaches 1, it is considered a power of two, and the function returns true.

