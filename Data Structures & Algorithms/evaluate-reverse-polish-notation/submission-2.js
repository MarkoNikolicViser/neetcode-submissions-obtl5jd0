class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const fun=(operator,a,b)=>{
            switch(operator){
                case'+':{return a+b}
                case'-':{return a-b}
                case'*':{return a*b}
                case'/':{return Math.trunc(a/b)}
            }
        }
        const stack=[]
        let res=0
        for(let i=0;i<tokens.length;i++){
            const el=tokens[i]
            if(!isNaN(tokens[i])){
                stack.push(Number(el))
            }else{
                const b=stack.pop()
                const a=stack.pop()
                stack.push(fun(el,a,b))
            }
        }
        return stack.pop()
    }
}
