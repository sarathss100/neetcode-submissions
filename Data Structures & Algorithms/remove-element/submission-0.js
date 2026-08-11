class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let track = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                [nums[i], nums[track]] = [nums[track], nums[i]];
                track++;
            } 
        }

        return track;
    }
}
