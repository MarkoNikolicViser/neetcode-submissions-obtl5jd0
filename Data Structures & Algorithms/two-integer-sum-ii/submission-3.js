class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left=0
        let right=numbers.length-1
        while(left<right){
            if(numbers[right]>target-numbers[left]){
                right--
                continue
            }else if(numbers[left]<target-numbers[right]){
                left++
                continue
            }
            return[left+1,right+1]
        }
    }
}
