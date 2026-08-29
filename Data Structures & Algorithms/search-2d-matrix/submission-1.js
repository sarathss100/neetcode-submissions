class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // let m = matrix.length;
        // let n = matrix[0].length;
        // let r = 0;
        // let c = n - 1;
        // while (r < m && c >= 0) {
        //     if (matrix[r][c] === target) {
        //         return true;
        //     } else if (matrix[r][c] < target) {
        //         r = r + 1;
        //     } else {
        //         c = c - 1;
        //     }
        // }

        // return false;
        let m = matrix.length;
        let n = matrix[0].length;
        let r = 0;
        let c = m * n - 1;
        while (r <= c) {
            let mid = Math.floor((r + c) / 2);
            let row = Math.floor(mid / n);
            let col = Math.floor(mid % n);
            if (matrix[row][col] < target) {
                r = mid + 1;
            } else if (matrix[row][col] > target) {
                c = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
