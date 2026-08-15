class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let temp = [];

        // for (let i = 0; i < nums.length; i++) {
        //     let sum = 1;
        //     for (let j = 0; j < nums.length; j++) {
        //         if (i !== j) {
        //             sum *= nums[j];
        //         }
        //     }

        //     temp.push(sum);
        // }

        // return temp;
        let length = nums.length;
let newArr = new Array(length);

let left = 1;
for (let i = 0; i < length; i++) {
    newArr[i] = left;
    left *= nums[i];
}

let right = 1;
for (let i = length - 1; i >= 0; i--) {
   newArr[i] *= right;
   right *= nums[i];
}
return newArr;
    }
}
