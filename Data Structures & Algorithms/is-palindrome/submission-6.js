class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
            function isAlphaNumeric(char){
            return /^[a-z0-9]+$/i.test(char)
        }
        let left=0
        let right=s.length-1
        while(left<right){
            if(!isAlphaNumeric(s[left])){
                left++
                continue
            }
            if(!isAlphaNumeric(s[right])){
                right--
                continue
            }
            if(s[left].toLowerCase()===s[right].toLowerCase()){
                left++
                right--
            }else{
                return false
            }
        }
        return true
    }
}
