## Factorial Calculation - Code Explanation

The following code calculates the factorial of a given number 'n' using an iterative approach.

### Code

```javascript
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120
console.log(factorial(6)); // 6*5*4*3*2*1 = 720
```

## Algorithm Explanation
1. The code defines a function called factorial that takes a parameter n, representing the number for which the factorial is to be calculated.

2. The variable result is initialized to 1. This variable will store the factorial value.

3. A loop is initiated with the variable i set to 2, and it continues until i is less than or equal to n.

4. Inside the loop, the code multiplies the current value of result by i and assigns the result back to result.

5. After the loop ends, the code returns the final value of result, which represents the factorial of n.

## Example

Let's consider a few examples with different input values:

- When factorial(0) is called, the output is 1. This is because the factorial of 0 is defined as 1.

- When factorial(4) is called, the output is 24. This is because the factorial of 4 is calculated as 4 * 3 * 2 * 1, which equals 24.

- When factorial(5) is called, the output is 120. This is because the factorial of 5 is calculated as 5 * 4 * 3 * 2 * 1, which equals 120.

- When factorial(6) is called, the output is 720. This is because the factorial of 6 is calculated as 6 * 5 * 4 * 3 * 2 * 1, which equals 720.

- The code effectively calculates the factorial of a given number by iteratively multiplying the numbers from 2 up to 'n' and storing the result in the result variable.

> # Big-O = O(n)
