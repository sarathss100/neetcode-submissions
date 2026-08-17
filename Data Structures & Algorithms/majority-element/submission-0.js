class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {};
        let mid = Math.floor(nums.length / 2);
        for (let n of nums) {
            obj[n] = (obj[n] || 0) + 1;
            if (obj[n] > mid) return n;
        }
    }
}
