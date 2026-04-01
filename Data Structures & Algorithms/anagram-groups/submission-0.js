class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resObj={}

        for (let i=0;i<strs.length;i++){
            const key=strs[i].split('').sort().toString().replaceAll(',','')
            if(!resObj.hasOwnProperty(key)){
                resObj[key]=[strs[i]]
            }else{
                resObj[key].push(strs[i])
            }
        }
        return [Object.entries(resObj).map(m=>m[1])][0]
    }
}
