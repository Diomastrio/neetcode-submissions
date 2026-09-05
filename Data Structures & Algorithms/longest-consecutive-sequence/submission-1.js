class Solution {
    longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let longestStreak = 0;
    
    // Step 2: Iterate through unique numbers
    for (const num of numSet) {
        // Step 3: Check if this is a starting point
        // If num - 1 exists, this isn't the start of a sequence
        if (!numSet.has(num - 1)) {
            // This is a starting point!
            let currentNum = num;
            let currentStreak = 1;
            
            // Step 4: Count the sequence length
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            
            // Step 5: Update max length
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
    }
}
