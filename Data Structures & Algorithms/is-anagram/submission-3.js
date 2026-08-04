class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = new Map();

        for (const ch of s) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }

        for (const ch of t) {
            if (!count.has(ch) || count.get(ch) === 0) return false;
            count.set(ch, count.get(ch) - 1);
        }

        return true;
    }
}