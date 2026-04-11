class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj={}
        for(let i=0;i<nums.length;i++){
            if(obj[nums[i]]){
                obj[nums[i]]+=1
            }else{
                obj[nums[i]]=1
            }
        }
        const arr=new Array(nums.length).fill(0)
        for(let key in obj){
            if(arr[obj[key]]){
            arr[obj[key]].push(key)
            }else{
                arr[obj[key]]=[key]
            }
        }
        const res=[]
        for(let i=arr.length-1;i>=0;i--){
            const el=arr[i]
            if(el===0)continue
            if(res.length===k)return res
            for(let j=0;j<el.length;j++){
                if(res.length===k)return res
                res.push(el[j])
            }
        }
        return res
    }
}
