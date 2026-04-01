class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res=new Array(temperatures.length).fill(0)
        const stack=[]
        for(let i=0;i<temperatures.length;i++){
            const curr=temperatures[i]
            while(stack.length&&stack[stack.length-1][0]<curr){
                const [val,id]=stack.pop()
                res[id]=i-id
            }
            stack.push([curr,i])
        }
        return res
    }
}
