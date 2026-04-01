class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const objS = {}
    const objT = {}
    for (let i = 0; i < s.length; i++) {
        if (!objS.hasOwnProperty(s[i])) {
            objS[s[i]] = 1

        }
        if (!objT.hasOwnProperty(t[i])) {
            objT[t[i]] = 1

        }
        objT[t[i]] = objT[t[i]] + 1
        objS[s[i]] = objS[s[i]] + 1
    }
    console.log(objS, objT)
    for (let key in objS) {
        if (!objT.hasOwnProperty(key) || objT[key] !== objS[key]) {
            return false
        }
    }
    return true
}
}
