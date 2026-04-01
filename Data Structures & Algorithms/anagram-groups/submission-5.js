class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const obj={}
    for(let i=0;i<strs.length;i++){
        const word=strs[i]
        let arr=new Array(27).fill(0)
        for(let j=0;j<word.length;j++){
            const letterNum=word[j].charCodeAt() - 97
            arr[letterNum]+=1
        }
        const key=arr.toString()
        if(obj.hasOwnProperty(key)){
            obj[key].push(word)
        }else{
        obj[key]=[word]
        }
    }
    const res=[]
    for(let key in obj){
        res.push(obj[key])
    }
    return res

    }
}
