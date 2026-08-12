class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Create a sorted version of the string as the key
        const key = str.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Return just the groups (arrays of anagrams)
    return Array.from(map.values());
}
}
/*
 isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = new Map();
        for (const ch of s) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }
        for (const ch of t) {
            if (!count.has(ch) || count.get(ch) === 0) return     false;
            count.set(ch, count.get(ch) - 1);
        }
        return true;
    }
    */