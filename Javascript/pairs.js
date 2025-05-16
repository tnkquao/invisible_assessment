function findPairs(nums1, nums2, k) {
    const result = [];
    const complements = new Set();

    // Store all possible complements (k - num2) from nums2
    for (let num of nums2) {
        complements.add(k - num);
    }

    // Check which numbers in nums1 have their complement in nums2
    for (let num of nums1) {
        if (complements.has(num)) {
            result.push([num, k - num]);
        }
    }

    return result;
}

// Example usage
let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;

console.log(findPairs(nums1, nums2, k));


//------------------------------- TEST 2  -------------------------------

function decipher(ciphertext, knownWord) {
    const alphabetSize = 26;

    // Helper function to shift a character by a given amount
    function shiftChar(char, shift) {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';

        if (!isUpperCase && !isLowerCase) return char;

        // determine base ascii code
        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

        // get the character form of the derived ascii code
        return String.fromCharCode(
            ((char.charCodeAt(0) - base - shift + alphabetSize) % alphabetSize) + base
            //shift the character ensuring it remains in range of alphaabets
        );
    }

    // Try all possible shifts
    for (let shift = 0; shift < alphabetSize; shift++) {
        let decrypted = '';
        for (let char of ciphertext) {
            decrypted += shiftChar(char, shift);
        }

        if (decrypted.includes(knownWord)) {
            return decrypted;
        }
        console.log(shift);
    }

    return null; // Return null if no match is found
}
