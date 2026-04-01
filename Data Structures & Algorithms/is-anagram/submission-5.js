class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false
        }
        const sObj={}
        const tObj={}
        for(let i=0;i<s.length;i++){
            if(sObj[s[i]]){
                sObj[s[i]]+=1
            }else{
                sObj[s[i]]=1
            }
            if(tObj[t[i]]){
                tObj[t[i]]+=1
            }else{
                tObj[t[i]]=1
            }
        }
        for(const key in sObj){
            if(!tObj[key]||tObj[key]!==sObj[key])
                return false
        }
        return true
    }
}
