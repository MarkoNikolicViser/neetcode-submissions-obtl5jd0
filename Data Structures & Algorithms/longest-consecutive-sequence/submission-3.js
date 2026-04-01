class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set=new Set(nums)
        let max=0
        for(const num of set){
            if(set.has(num-1)){
                continue
            }else{
                let tempMax=0
                while(set.has(num+tempMax)){
                    tempMax+=1
                }
            max=Math.max(max,tempMax)
            }
        }
        return max
    }
}
