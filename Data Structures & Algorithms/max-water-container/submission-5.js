class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0
        let right=heights.length-1
        let max=0
        while(left<right){
            let sum=0
            if(heights[left]<heights[right]){
                sum=heights[left]*(right-left)
                left++
            }else{
                sum=heights[right]*(right-left)
                right--
            }
            max=Math.max(max,sum)
        }
        return max
    }
}
