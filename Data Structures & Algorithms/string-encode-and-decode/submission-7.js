class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(m=>`${m.length}#${m}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const res=[]
    let i=0
    while(i<str.length){
        let j=i
        while(str[j]!=='#'){
            j++
        }
        const ctrlNum=Number(str.substring(i,j))
        const decodedStr=str.substring(j+1,j+ctrlNum+1)
        res.push(decodedStr)
        i=ctrlNum+j+1
    }
    return res
    }
}
