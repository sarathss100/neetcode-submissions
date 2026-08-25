class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let obj = {};

        for (let n of nums) {
            if (n >= 0) {
                obj[n] = (obj[n] || 0) + 1;
            }
        }

        let n = 1;

        while (true) {
            if (!obj[n]) return n;
            n++;
        }

        return n;
    }
}
