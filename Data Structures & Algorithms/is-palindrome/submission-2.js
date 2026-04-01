class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const isAlphaNum=(char)=>{
        let asciChar=char.toLowerCase().charCodeAt()
        if(asciChar>='a'.charCodeAt() && asciChar<='z'.charCodeAt()||
            asciChar>='0'.charCodeAt()&&asciChar<='9'.charCodeAt()){
                return true
            }
            return false
    }
        let left=0
        let right=s.length-1
        while(left<right){
            while(!isAlphaNum(s[right])&&left<right){
                right--
                continue
            }
            while(!isAlphaNum(s[left])&&left<right){
                left++
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
