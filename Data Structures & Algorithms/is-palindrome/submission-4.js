class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       const isItAlphaNumeric=(char)=>{
            const charCode=char.toLowerCase().charCodeAt()
            if(charCode>='a'.charCodeAt()&&charCode<='z'.charCodeAt()||
            charCode>='0'.charCodeAt()&&charCode<='9'.charCodeAt()){
                return true
            }
            return false
       }
       let left=0
       let right=s.length-1
       while(left<right){
            while(!isItAlphaNumeric(s[left])&&left<right){
                left++
            }
            while(!isItAlphaNumeric(s[right])&&left<right){
                right--
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
