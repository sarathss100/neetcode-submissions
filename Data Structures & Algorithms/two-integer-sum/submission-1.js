class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // let left = 0;
        // let right = nums.length - 1;
        // while (left < right) {
        //     let sum = nums[left] + nums[right];

        //     if (sum === target) {
        //         return [left, right];
        //     } else if (sum > target) {
        //         right--;
        //     } else {
        //         left++;
        //     }
        // }

        // return [-1, -1];
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }
            
            seen.set(nums[i], i);
        }
    }
}
