class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack=[]
        const res=new Array(temperatures.length).fill(0)
        for(let i=0;i<temperatures.length;i++){
            const el=temperatures[i]
            while(stack.length>0&&stack[stack.length-1][0]<el){
                const [element,index]=stack.pop()
                res[index]=i-index
            }
            stack.push([el,i])
        }
        return res
    }
}
