class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const resArr=[]
        let prefix=1
        let sufix=1
        for(let i=0;i<nums.length;i++){
            resArr[i]=prefix
            prefix*=nums[i]
        }
        for(let i=nums.length-1;i>=0;i--){
            resArr[i]*=sufix
            sufix*=nums[i]
        }
        return resArr
    }
}
