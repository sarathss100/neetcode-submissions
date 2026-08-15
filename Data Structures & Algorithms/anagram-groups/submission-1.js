class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let w of strs) {
            let temp = new Array().fill();
            let key = "";
            for (let c of w) {
                let index = c.charCodeAt(0) - "a".charCodeAt(0);
                temp[index] = (temp[index] || 0) + 1;
            }

            for (let i = 0; i < temp.length; i++) {
                if (temp[i]) {
                    let char = String.fromCharCode(i + 96)
                    key += `${char}${temp[i]}`;
                }
            }

            if (map.has(key)) {
                map.set(key, [...map.get(key), w])
            } else {
                map.set(key, [w]);
            }
        }
        
        return [...map.values()];
    }
}
