class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let temp = "";

        for (let i = 0; i < strs[0].length; i++) {
            let char = strs[0][i];
            let flag = true;

            for (let j = 1; j < strs.length; j++) {
                if (char !== strs[j][i]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                temp += char;
            } else {
                break;
            }
        }


        return temp;
    }
}
