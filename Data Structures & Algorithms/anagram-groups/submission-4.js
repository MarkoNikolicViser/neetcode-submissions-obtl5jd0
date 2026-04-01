class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj={}
    // in python keys of objects can be tuples(array)
        for(let i=0;i<strs.length;i++){
        let string=strs[i]
        let count=new Array(26).fill(0)
        for(let j=0;j<string.length;j++){
            let asciNum=string[j].charCodeAt() - 97
            count[asciNum]++
        }
        const key=count.join('#')
        if(obj.hasOwnProperty(key)){
            obj[key].push(string)
        }else{
            obj[key]=[string]
        }
    }
    const res=[]
    for(const key in obj){
        res.push(obj[key])
    }
    return res
    }
}
