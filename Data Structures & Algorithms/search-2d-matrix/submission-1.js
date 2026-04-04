class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0;i<matrix.length;i++){
            const el=matrix[i]
            const len=matrix[i].length
            let left=0
            let right=len-1
            if(target>=el[0]&&target<=el[len-1]){
                while(left<=right){
                  const mid=Math.trunc((left+right)/2)
                    if(el[mid]===target){
                        return true
                    }else if(el[mid]>target){
                        right=mid-1
                    }else{
                        left=mid+1
                    }
                }
            }
        }
        return false
    }
}
