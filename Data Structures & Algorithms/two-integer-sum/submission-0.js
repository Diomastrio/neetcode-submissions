class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = [];
        nums.forEach((num, index)=>{
            for (let i = index + 1; i < nums.length; i++) {
                if(nums[index] + nums[i] == target){
                     res = [index, i];
                }
            }
        })
        return res;
    }
}
