class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(s){
        const code=s.charCodeAt()
        if(code>=97&&code<=123||code>=65&&code<=90||code>=48&&code<=57)return true
        return false
    }
    isPalindrome(s) {
        let left=0
        let right=s.length-1
        while(left<right){
            if(!this.isAlphaNum(s[left])){
                left++
                continue
            }else if(!this.isAlphaNum(s[right])){
                right--
                continue
            }
            if(s[left].toLowerCase()!==s[right].toLowerCase()){
                return false
            }
            left++
            right--
        }
        return true
    }
}
