class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        // return Math.floor(Math.sqrt(x));
        if (x <= 1) return x;
        let i = 0;
        let j = x;
        let track = 1;
        while (i <= j) {
            let m = Math.floor((i + j) / 2);
            let res = m * m;
            if (res === x) {
                return m;
            } else if (res < x) {
                track = m;
                i = m + 1;
            } else {
                j = m - 1;
            }
        }

        return track;
    }
}
