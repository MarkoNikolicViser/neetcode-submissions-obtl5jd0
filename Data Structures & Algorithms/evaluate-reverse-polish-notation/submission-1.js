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
                case '*':{return a*b}
                case '/':{return Math.trunc(a/b)}
            }
        }
         for(let i=0; i<tokens.length;i++){
                if(!isNaN(tokens[i])){
                    stack.push(tokens[i])
                }else{
                    const b=stack.pop()
                    const a=stack.pop()
                    stack.push(helper(Number(a),Number(b),tokens[i]))
                }
            }
            return stack.pop()
    }
}
