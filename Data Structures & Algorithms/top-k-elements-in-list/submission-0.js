class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj={}
        for(let i=0;i<nums.length;i++){
            if(!obj.hasOwnProperty(nums[i])){
                obj[nums[i]]=1
            }else{
                obj[nums[i]]+=1
            }
        }
        const arr=[]
        for(let key in obj){
            arr.push([key,obj[key]])
        }
        const sortedArr=arr.sort((a,b)=>b[1]-a[1]).slice(0,k)
        return sortedArr.map(m=>m[0])
    }
}
