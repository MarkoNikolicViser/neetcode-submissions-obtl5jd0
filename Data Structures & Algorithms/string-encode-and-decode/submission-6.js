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
            j+=1
        }
        const numCtrl=Number(str.substring(i,j))
        const wordSubstring=str.substring(j+1,j+numCtrl+1)
        res.push(wordSubstring)
        i=j+numCtrl+1
    }
    return res
    }
}
