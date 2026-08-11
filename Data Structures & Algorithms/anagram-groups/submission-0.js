class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (const word of strs) {
            let sortedWord = word.split('').sort().join('');

            if (!map.has(sortedWord)) {
                map.set(sortedWord, []);
            }

            map.get(sortedWord).push(word);
        }

        return Array.from(map.values());
    }
}
