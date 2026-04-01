class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxLeft=new Array(height.length).fill(0)
        const maxRight=new Array(height.length).fill(0)
        let res=0
        for(let i=1;i<height.length;i++){
            maxLeft[i]=Math.max(height[i-1],maxLeft[i-1])
        }
        for(let i=height.length-2;i>=0;i--){
            maxRight[i]=Math.max(maxRight[i+1],height[i+1])
        }
        for(let i=0;i<height.length;i++){
            let min=Math.min(maxLeft[i],maxRight[i])
            let diff=min-height[i]
            if(diff>0){
                res+=diff
            }
        }
        return res
    }
}
