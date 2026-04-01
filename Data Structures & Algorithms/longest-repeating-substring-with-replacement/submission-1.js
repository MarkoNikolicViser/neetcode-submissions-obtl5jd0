class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const letterCount={}
        let left=0
        let max=0
        for(let right=0;right<s.length;right++){
            if(letterCount.hasOwnProperty(s[right])){
                letterCount[s[right]]+=1
            }else{
                letterCount[s[right]]=1
            }
            const maxLetters=Math.max(...Object.values(letterCount))
            while((right-left+1)-maxLetters>k){
                letterCount[s[left]]-=1
                left++
            }
            max=Math.max(max,right-left+1)
        }
        return max
    }
}
