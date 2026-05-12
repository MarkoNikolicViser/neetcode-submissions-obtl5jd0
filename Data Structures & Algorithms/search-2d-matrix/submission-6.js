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
            const mid=Math.trunc((left+right)/2)
            const arr=matrix[mid]
            if(arr[0]<=target&&arr[arr.length-1]>=target){
                let innerLeft=0
                let innerRight=arr.length-1
                while(innerLeft<=innerRight){
                    const innerMid=Math.trunc((innerLeft+innerRight)/2)
                    if(target===arr[innerMid]){
                        return true
                    }else if(target>arr[innerMid]){
                        innerLeft=innerMid+1
                    }else{
                        innerRight=innerMid-1
                    }
                }
                return false
            }else if(arr[arr.length-1]<target){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return false
    }
}
