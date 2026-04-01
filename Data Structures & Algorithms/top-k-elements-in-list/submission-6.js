class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map=new Map()
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i]) + 1)
            }else{
                map.set(nums[i],1)
            }
        }
        const bucket=[]
        for(const [key,value] of map){
            if(bucket[value]){
            bucket[value].push(key)
            }else{
                bucket[value]=[key]
            }
        }
        const resArr=[]
        for(let i=bucket.length;i>=0;i--){
            if(!bucket[i])continue
            if(resArr.length===k){
                return resArr
            }
            const subArray=bucket[i]
            for(let j=0;j<subArray.length;j++){
                if(resArr.length<k){
                    resArr.push(subArray[j])
                }else{
                    return resArr
                }
            }
        }
    return resArr
    }
}
