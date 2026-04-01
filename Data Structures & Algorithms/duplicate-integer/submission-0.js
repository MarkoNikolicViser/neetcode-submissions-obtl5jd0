class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj ={};
        for(let i=0;i<nums.length;i++){
            const currEl=nums[i]
            if(obj.hasOwnProperty(currEl)){
                obj[currEl] = obj[currEl] + 1
                return true
            }else{
                obj[currEl] = 1
            }
        }
        return false
    }
}
