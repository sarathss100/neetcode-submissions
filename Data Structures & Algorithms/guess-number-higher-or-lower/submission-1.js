/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let i = 0;
        let j = n;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            let res = guess(mid);
            if (res === 0) {
                return mid;
            } else if (res === -1) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }

        return -1;
    }
}
