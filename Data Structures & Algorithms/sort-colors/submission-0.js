class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for (let i = nums.length; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (nums[i] < nums[j]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
            }
        }
    }
}
