class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const map={}
    for(let i=0;i<nums.length;i++){
        const element=nums[i]
        if(map.hasOwnProperty(element)){
            map[element]+=1
        }else{
            map[element]=1
        }
    }
    const bucketArr=[]
    for(let key in map){
        if(bucketArr[map[key]]){
            bucketArr[map[key]].push(key)
        }else{
            bucketArr[map[key]]=[key]
        }
    }
    const res=[]
     for(let i=bucketArr.length;i>=1;i--){
        const subarray=bucketArr[i]
                if(res.length===k){
                    return res
                }
            if(!subarray){
                continue
            }
        for(let j=0;j<subarray.length;j++){
            if(res.length===k){
                return res
            }
                res.push(subarray[j])
        }
    }
    return res
    }
}
