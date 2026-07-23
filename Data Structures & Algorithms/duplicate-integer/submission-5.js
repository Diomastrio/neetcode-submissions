class Solution {
    /**
     * @param {number[] | string[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        
        return false;
    }
}
