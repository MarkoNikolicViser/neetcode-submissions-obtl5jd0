class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const obj={}
        for(let i=0;i<nums.length;i++){
            const neededNum=target-nums[i]
            if(!obj.hasOwnProperty(neededNum)){
                obj[nums[i]]=i
                continue
            }
            return [obj[neededNum], i]
        } 
    }
}
