class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        let temp = [];

        for (const num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }

        for (const [key, value] of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
            if (k > 0) {
                temp.push(Number(key));
                k--;
            }
        }

        return temp;
    }
}
