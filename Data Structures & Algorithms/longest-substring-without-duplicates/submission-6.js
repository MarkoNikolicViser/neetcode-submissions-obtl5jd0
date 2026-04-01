class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
          const set=new Set()
    let left=0
    let right=0
    let max=0
    while(right<s.length){
        console.log(set)
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        max=Math.max(max,right+1-left)
        right++
    }
    return max
    }
}
