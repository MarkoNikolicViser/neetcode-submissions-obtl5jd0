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
            if(sObj.hasOwnProperty(s[i])){
                sObj[s[i]]+=1
            }else{
            sObj[s[i]]=1
            }
            if(tObj.hasOwnProperty(t[i])){
                tObj[t[i]]+=1
            }else{
            tObj[t[i]]=1
            }
        }
        for(const key in sObj){
            if(!sObj.hasOwnProperty(key)&&!tObj.hasOwnProperty(key)){
                return false
            }
            if(sObj[key]!==tObj[key]){
                return false
            }
        }
        return true
    }
}
