class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack =[]
        const map={')':'(','}':'{',']':'['}
        for(let i=0;i<s.length;i++){
            const el=s[i]
            if(!map[el]){
                stack.push(el)
            }else if(!stack.length||stack.pop()!==map[el]){
                return false
            }
        }
        return stack.length===0
    }
}
