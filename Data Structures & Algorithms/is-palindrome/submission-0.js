class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric=(s)=>{
   let res=''
   for(let i=0;i<s.length;i++){
    const asciNum=s[i].charCodeAt()
        if((asciNum>=48&&asciNum<=57)||(asciNum>=65&&asciNum<=90)||(asciNum>=97&&asciNum<=122)){
            res+=s[i].toLowerCase()
        }
   }
   return res
    }
            const formattedS=isAlphaNumeric(s)
    for(let i=0;i<formattedS.length;i++){
        if(formattedS[formattedS.length-1-i]!==formattedS[i]){
            return false
        }
    }
    return true
    }
}
