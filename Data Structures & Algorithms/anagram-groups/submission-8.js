class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj={}
        for(let i=0;i<strs.length;i++){
            const str=strs[i]
            const key=new Array(27).fill(0)
            for(let j=0;j<str.length;j++){
                const letterIndex=str[j].charCodeAt()-97
                key[letterIndex]+=1
            }
            const strKey=key.toString()
            if(obj.hasOwnProperty(strKey)){
                obj[strKey].push(str)
            }else{
                obj[strKey]=[str]
            }
        }
        return [...Object.values(obj)]
    }
}
