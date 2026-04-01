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
            maxLeft[i]=Math.max(maxLeft[i-1],height[i-1])
        }
        for(let i=height.length-2;i>=0;i--){
            maxRight[i]=Math.max(maxRight[i+1],height[i+1])
        }
        for(let i=0;i<height.length;i++){
            const minEl=Math.min(maxLeft[i],maxRight[i])
            const diff=minEl-height[i]
            if(diff>0){
                res+=diff
            }
        }
        return res
    }
}
