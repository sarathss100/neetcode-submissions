class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let obj = {};

        for (let l of s) {
            obj[l] = (obj[l] || 0) + 1;
        }

        for (let l of t) {
            if (!obj[l]) return false;
            obj[l] = obj[l] - 1;
        }

        return true;
    }
}
