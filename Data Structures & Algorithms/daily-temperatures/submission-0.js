class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res=new Array(temperatures.length).fill(0)
        const stack=[] //[val,id]
        for(let i=0;i<temperatures.length;i++){
            const el=temperatures[i]
            while(stack.length && stack[stack.length-1][0]<el){
                const[val,id]=stack.pop()
                res[id]=i-id
            }
            stack.push([el,i])
        }
        return res
    }
}
