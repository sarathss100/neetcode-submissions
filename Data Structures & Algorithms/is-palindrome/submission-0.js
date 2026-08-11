class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let filteredStrArr = [...s].filter(val => /[0-9a-zA-Z]/.test(val));
        let lowerCasedStrArr = filteredStrArr.map(val => val.toLowerCase());
        let str = lowerCasedStrArr.join('');

        let left = 0;
        let right = str.length - 1;

        while (left <= right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
