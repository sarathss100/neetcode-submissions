class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        for (let n of nums) {
            obj[n] = (obj[n] || 0) + 1;
        }

        let temp = Object.entries(obj).sort((a, b) => b[1] - a[1]);
        let arr = [];
        let i = 0;

        while (i < k) {
            arr.push(Number(temp[i][0]));
            i++;
        }

        return arr;
    }
}
