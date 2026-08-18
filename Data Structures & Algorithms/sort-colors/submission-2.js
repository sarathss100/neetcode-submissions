class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // for (let i = nums.length; i > 0; i--) {
        //     for (let j = 0; j < i; j++) {
        //         if (nums[i] < nums[j]) {
        //             [nums[i], nums[j]] = [nums[j], nums[i]];
        //         }
        //     }
        // }

        let arr = new Array(3).fill(0);
        
        for (let n of nums) {
            arr[n] = (arr[n] || 0) + 1;
        }
        
        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            while (arr[i]-- > 0) {
                nums[j++] = i;
            } 
        }
    }
}
