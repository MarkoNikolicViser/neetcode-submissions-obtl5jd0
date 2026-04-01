class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let strRes=''
        strs.map(str=>{
            strRes+=`${str.length}#${str}`
        })
        return strRes
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
     decode(str) {
    const res = []
    let i = 0
    while (i < str.length) {
        let j = i
        while (str[j] !== '#') {
            j++
        }
        const ctrlNum = Number(str.slice(i, j))
        res.push(str.slice(j + 1, j + ctrlNum + 1))
        i = j + ctrlNum + 1
    }
    return res
}
}
