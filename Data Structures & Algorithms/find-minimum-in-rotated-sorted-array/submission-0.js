class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left=0
        let right=nums.length-1
        let min=nums[0]
        while(left<=right){
            const mid=Math.trunc((left+right)/2)
            if(nums[left]<nums[right]){
                min=Math.min(min,nums[left])
                right=mid-1
            }else{
                min=Math.min(min,nums[right])
                left=left+1
            }
        }
        return min
    }
}
