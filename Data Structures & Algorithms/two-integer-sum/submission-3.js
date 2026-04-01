class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj={}
         for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i];
    if (obj.hasOwnProperty(neededNum)) {
      return [obj[neededNum], i];
    }
    obj[nums[i]] = i;
  }
    }
}
