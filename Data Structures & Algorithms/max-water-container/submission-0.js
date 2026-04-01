class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
           let left=0
    let right=heights.length-1
    let res=0

    while(left<right){
        if(heights[right]>heights[left]){
        res=Math.max(heights[left]*(right-left),res)
                left++
            }else{
            res=Math.max(heights[right]*(right-left),res)
                right--
            }
    }
    return res
    }
}
