class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resObj={}
    // in python keys of objects can be tuples(array)
        for (let i=0;i<strs.length;i++){
            const key=strs[i].split('').sort().join()
            if(!resObj.hasOwnProperty(key)){
                resObj[key]=[strs[i]]
            }else{
                resObj[key].push(strs[i])
            }
        }
        return Object.values(resObj)
    }
}
