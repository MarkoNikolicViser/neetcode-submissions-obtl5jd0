class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
          const sortedNums=nums.sort((a, b) => a - b);
    const res=[]
    for(let i=0;i<sortedNums.length;i++){
        const current=sortedNums[i]
        if(sortedNums[i]===sortedNums[i-1]){
            continue
        }
        let left=i+1
        let right=sortedNums.length-1
        while(left<right){
            if(current+sortedNums[left]+sortedNums[right]===0){
                res.push([current,sortedNums[left],sortedNums[right]])
                left++
                     while(nums[left]===nums[left-1]&&left<right){
                    left++
                }
            }else if(current+sortedNums[left]+sortedNums[right]>0){
                right--
            }else{
                left++
            }
        }
    }
    return res
    }
}
