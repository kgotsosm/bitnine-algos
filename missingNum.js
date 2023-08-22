/**
 * Finds and returns the first missing number within a given range from 1 to 45,
 * excluding the numbers that are present in the provided array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The first missing number in the range [1, 45].
 */
function missingItems(arr) {
    // Loop through the range from 1 to 45.
    for (let i = 1; i <= 45; i++) {
        // Check if the current number 'i' is not present in the input 'arr'.
        if (!arr.includes(i)) {
            // If 'i' is missing, return it as the missing number.
            return i;
        }
    }

    // If no missing number is found, return message
    return "No missing numbers!"; 
}

// Example input array 'arr' containing some numbers.
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45
]

// Call the 'missingItems' function with the input array and log the result.
console.log(missingItems(arr));
