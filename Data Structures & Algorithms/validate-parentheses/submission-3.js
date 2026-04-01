class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack=[]
        const map={')':'(','}':'{',']':'['}
        for(let i=0;i<s.length;i++){
            const el=s[i]
            if(!map.hasOwnProperty(el)){
                stack.push(el)
            }else{
            if(!stack.length || map[el]!==stack.pop()) return false
                 }
        }
        return stack.length===0
    }
}
