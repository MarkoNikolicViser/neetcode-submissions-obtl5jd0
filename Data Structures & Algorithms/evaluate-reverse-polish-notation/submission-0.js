class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack=[]
        const helper=(a,b,operator)=>{
            switch(operator){
                case '+':{return a+b}
                case '-':{return a-b}
                case '/':{return Math.trunc(a/b)}
                case '*':{return a*b}
            }
        }
        for(let i=0;i<tokens.length;i++){
            const el=tokens[i]
            if(!isNaN(el)){
                stack.push(el)
            }else{
                const b=stack.pop()
                const a=stack.pop()
                stack.push(helper(Number(a),Number(b),el))
            }
        }
        return stack.pop()
    }
}
