class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left=0
        let right=matrix.length-1
        while(left<=right){
            const midArrayIndex=Math.trunc((left+right)/2)
            const midArray=matrix[midArrayIndex]
            if(target>=midArray[0]&&target<=midArray[midArray.length-1]){
                let innerLeft=0
                let innerRight=midArray.length-1
                while(innerLeft<=innerRight){
                    let mid=Math.trunc((innerLeft+innerRight)/2)
                    if(target===midArray[mid]){
                        return true
                    }else if(target>midArray[mid]){
                        innerLeft=mid+1
                    }else{
                        innerRight=mid-1
                    }
                }
                return false
            }else if(target<midArray[0]){
                right=midArrayIndex-1
            }else{
                left=midArrayIndex+1
            }
        }
        return false
    }
}
