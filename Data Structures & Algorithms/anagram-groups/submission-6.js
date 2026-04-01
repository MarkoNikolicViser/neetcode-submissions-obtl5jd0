class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj={}
        for(let i=0;i<strs.length;i++){
            const string=strs[i]
            const key=new Array(27).fill(0)
            for(let j=0;j<string.length;j++){
                const letterIndex=string[j].charCodeAt()-97
                key[letterIndex]+=1
            }
            let stringKey=key.toString()
            if(obj.hasOwnProperty(stringKey)){
            obj[stringKey].push(strs[i])
            }else{
                obj[stringKey]=[strs[i]]
            }
        }
        return Object.values(obj)
    }
}
