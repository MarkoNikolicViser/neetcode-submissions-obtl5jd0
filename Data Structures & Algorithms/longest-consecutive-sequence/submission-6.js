class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set=new Set(nums)
        let counter=0
        for(let i=0;i<nums.length;i++){
            if(!set.has(nums[i]-1)){
                let j=1
                while(set.has(nums[i]+j)){
                    j++
                }
                counter=Math.max(counter,j)
            }
        }
        return counter
    }
}
