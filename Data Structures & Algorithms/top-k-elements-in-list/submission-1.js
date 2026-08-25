class Solution {
   topKFrequent(nums, k) {
    const count = new Map();

    // 1. Count each number
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // 2. Create frequency buckets
    const buckets = Array(nums.length + 1);

    for (const [num, freq] of count) {
        if (!buckets[freq]) {
            buckets[freq] = [];
        }

        buckets[freq].push(num);
    }

    // 3. Read buckets from highest frequency to lowest
    const result = [];

    for (let freq = buckets.length - 1; freq > 0; freq--) {
        if (!buckets[freq]) {
            continue;
        }

        for (const num of buckets[freq]) {
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }
}
}
