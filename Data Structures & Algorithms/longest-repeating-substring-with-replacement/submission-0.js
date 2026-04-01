class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const letterObj={}
        let left=0
        let max=0
        for(let right=0;right<s.length;right++){
            if(letterObj.hasOwnProperty(s[right])){
                letterObj[s[right]]+=1
            }else{
                letterObj[s[right]]=1
            }
            while((right-left+1)-Math.max(...Object.values(letterObj))>k){
                letterObj[s[left]]-=1
                left++
            }
            max=Math.max(max,right-left+1)
        }
        return max
    }
}
