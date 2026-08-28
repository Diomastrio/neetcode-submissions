class Solution {
productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Pass 1: fill result[i] with prefix product (product of everything before i)
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }

    // Pass 2: multiply in the suffix product (product of everything after i)
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix = suffix * nums[i];
    }

    return result;
}
}
