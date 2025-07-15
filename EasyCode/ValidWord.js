////Valid Word

// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.
 

// Example 1:

// Input: word = "234Adas"

// Output: true

// Explanation:

// This word satisfies the conditions.

// Example 2:

// Input: word = "b3"

// Output: false

// Explanation:

// The length of this word is fewer than 3, and does not have a vowel.

// Example 3:

// Input: word = "a3$e"

// Output: false

// Explanation:

// This word contains a '$' character and does not have a consonant.

 

// Constraints:

// 1 <= word.length <= 20
// word consists of English uppercase and lowercase letters, digits, '@', '#', and '$'.



function isValid(word) {
    if (word.length < 3) return false;

    // Check if word contains only letters and digits
    // ^ - Anchors the start of the string.It ensures that the match starts from the very beginning of the string.
    // + - It matches one or more letters or digits.
    // $ - Anchors the end of the string. It ensures the match ends at the very last character of the string.
    if (!/^[a-zA-Z0-9]+$/.test(word)) return false;

    // Check for at least one vowel (case-insensitive)
    if (!/[aeiouAEIOU]/.test(word)) return false;

    // Check for at least one consonant (must be a letter and not a vowel)
    if (!/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word)) return false;

    return true;
}
 
console.log(isValid("234Adas"));     
console.log(isValid("b13"));     
console.log(isValid("a3$e"));   