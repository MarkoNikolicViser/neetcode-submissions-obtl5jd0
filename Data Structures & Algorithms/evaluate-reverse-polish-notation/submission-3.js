class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    calc(op,a,b){
        switch(op){
            case '+' :{return a+b};
            case '-' :{return a-b};
            case '*' :{return a*b};
            case '/' :{return Math.trunc(a/b)};

        }
    }
    evalRPN(tokens) {
        const stack=[]

        for(let i=0;i<tokens.length;i++){
            if(!isNaN(tokens[i])){
                stack.push(Number(tokens[i]))
            }else{
                const a=stack.pop()
                const b=stack.pop()
                stack.push(this.calc(tokens[i],b,a))
            }
        }
        return stack.pop()
    }
}
