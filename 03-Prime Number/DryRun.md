## isPrime Function - Code Explanation

The following code checks whether a given number 'n' is prime or not.

### Code

```javascript
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
```

## Algorithm Explanation

1. The code defines a function called isPrime that takes a parameter n, representing the number to be checked for primality.

2. The code first checks if n is less than 2. If so, it returns false since prime numbers are greater than or equal to 2.

3. A loop is initiated with the variable i set to 2, and it continues until i is less than n.

4. Inside the loop, the code checks if n is divisible by i (i.e., n % i === 0). If so, it means n is divisible by a number other than 1 and itself, indicating that it is not a prime number. In this case, the function returns false.

5. After the loop ends, if no factors other than 1 and n itself are found, the function returns true, indicating that n is a prime number.

## Example

Let's consider a few examples with different input values:

- When isPrime(1) is called, the output is false. This is because 1 is not considered a prime number.

- When isPrime(2) is called, the output is true. This is because 2 is a prime number as it is only divisible by 1 and itself.

- When isPrime(5) is called, the output is true. This is because 5 is a prime number as it is only divisible by 1 and itself.

- When isPrime(4) is called, the output is false. This is because 4 is not a prime number since it is divisible by 2 (besides 1 and itself).

- The code checks if the given number is prime by iterating from 2 to n-1 and checking if n is divisible by any number in that range. If a factor is found, it returns false; otherwise, it returns true indicating that the number is prime.

> # Big-O = O(n)

```javascript
function isPrime(n) {
    if(n<2){
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n%2===0){
            return false
        }
    }
    return true
}
```

> # Big-O = O(sqrt(n))
