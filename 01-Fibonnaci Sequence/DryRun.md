## Fibonacci Sequence - Code Explanation

The following code demonstrates an iterative approach to generate the Fibonacci sequence up to a given value 'n'.

### Code

```javascript
function fibonacci(n){
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
```
## Algorithm Explanation

The code starts by creating an empty array called 'fib' to store the Fibonacci sequence. It initializes the array with the first two Fibonacci numbers, [0, 1].

1. A loop is initiated with the variable 'i' set to 2, and it continues until 'i' is less than the given value 'n'.

2. Inside the loop, the code calculates the value for the 'i'-th position in the Fibonacci sequence by adding the previous two values. The calculated value is stored in the 'fib' array at the 'i'-th index.

```javascript
fib[i] = fib[i-1] + fib[i-2]
```

3. After the loop ends, the code returns the 'fib' array containing the Fibonacci sequence.

## Example

Let's take an example where the input value of 'n' is 6. Here are the steps that occur:

1. The 'fib' array is initialized with [0, 1].
2. The loop begins with 'i' set to 2.
    - The code calculates `fib[2] = fib[1] + fib[0]`, resulting in `fib[2] = 1 + 0 = 1`.
3. The loop continues with 'i' set to 3.
    - The code calculates `fib[3] = fib[2] + fib[1]`, resulting in `fib[3] = 1 + 1 = 2`.
4. The loop continues with 'i' set to 4.
    - The code calculates `fib[4] = fib[3] + fib[2]`, resulting in `fib[4] = 2 + 1 = 3`.
5. The loop continues with 'i' set to 5.
    - The code calculates `fib[5] = fib[4] + fib[3]`, resulting in `fib[5] = 3 + 2 = 5`.
6. The loop ends because 'i' is no longer less than 'n' (6). Finally, the code returns the 'fib' array with [0, 1, 1, 2, 3, 5], which represents the Fibonacci sequence up to the 6th position.

**Note:** This code utilizes an iterative approach and dynamic programming to efficiently calculate the Fibonacci sequence. By storing the calculated values in the 'fib' array, redundant calculations are avoided.

<hr>

> # Big-O = O(n)
