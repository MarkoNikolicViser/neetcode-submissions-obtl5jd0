class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const arr=position.map((element,index)=>[element,speed[index]])
        arr.sort((a,b)=>b[0]-a[0])
        const stack=[]
        for(let i=0;i<arr.length;i++){
            const [elPos,elSpeed]=arr[i]
            stack.push((target-elPos)/elSpeed)
            if(stack.length>=2&&stack[stack.length-1]<=stack[stack.length-2]){
                stack.pop()
            }
        }
        return stack.length
    }
}
