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
        const sMap={}
        const tMap={}

        for(let i=0;i<s.length;i++){
            if(sMap.hasOwnProperty(s[i])){
                sMap[s[i]]+=1
            }else{
                sMap[s[i]]=1
            }
            if(tMap.hasOwnProperty(t[i])){
                tMap[t[i]]+=1
            }else{
                tMap[t[i]]=1
            }
        }
        for(let key in sMap){
            if(tMap.hasOwnProperty(key)&&tMap[key]===sMap[key]){
                continue
            }else{
                return false
            }
        }
        return true
    }
}
