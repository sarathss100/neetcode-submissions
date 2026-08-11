class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // let str = '';

        // for (let i = 0; i < s.length; i++) {
        //     if (/[a-zA-Z0-9]/.test(s[i])) {
        //         str += s[i].toLowerCase()
        //     }
        // }

        // let left = 0;
        // let right = str.length - 1;

        // while (left <= right) {
        //     if (str[left] !== str[right]) return false;
        //     left++;
        //     right--;
        // }

        // return true;
        let left = 0;
        let right = s.length - 1;

        const isAlphaNumeric = function (char) {
            return /[0-9a-zA-Z]/.test(char);
        }

        while (left <= right) {
            if (!isAlphaNumeric(s[left])) {
                left++;
            } else if (!isAlphaNumeric(s[right])) {
                right--;
            } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            } else {
                left++;
                right--;
            }
        }

        return true;
    }
}
