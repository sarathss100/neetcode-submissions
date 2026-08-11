class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let track = 0;
        for (let i = 0; i <= nums.length; i++) {
           if (nums[track] !== nums[i]) {
            track++;
            nums[track] = nums[i];
           }
        }

        return track;
    }
}
