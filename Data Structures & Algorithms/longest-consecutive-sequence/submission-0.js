class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set=new Set(nums)
        let longest=0

        for(const element of set){
            if(!set.has(element - 1 )){
                let length=0
                while(set.has(element+length)){
                    length+=1
                    longest=Math.max(length,longest)
                }
            }
        }
        return longest
    }
}
