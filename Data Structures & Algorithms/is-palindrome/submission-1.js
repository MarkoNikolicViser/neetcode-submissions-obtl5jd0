class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const isAlphaNumeric=(char)=>{
    const asciNum=char.charCodeAt()
        if((asciNum>=48&&asciNum<=57)||(asciNum>=65&&asciNum<=90)||(asciNum>=97&&asciNum<=122)){
           return true
        }
        return false
}


    let first=0
    let last=s.length-1
    while(first <= last){
        while(first<last&&!isAlphaNumeric(s[first])){
            first++
        }
        while(first<last&&!isAlphaNumeric(s[last])){
            last--
        }
        if(s[first].toLowerCase()!==s[last].toLowerCase()){
            return false
        }
        first++
        last--
    }
    return true
    }
}
