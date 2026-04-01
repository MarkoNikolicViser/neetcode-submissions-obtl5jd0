class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set=new Set(nums)
        let i=0
        let max=0
        while(i<nums.length){
            if(set.has(nums[i]-1)){
                i++
                continue
            }
            let tempMax=1
            while(set.has(nums[i]+tempMax)){
                tempMax+=1
            }
            max=Math.max(max,tempMax)
            i++
        }
        return max
    }
}
