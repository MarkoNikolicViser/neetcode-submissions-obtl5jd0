class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            obj[nums[i]] += 1
        } else {
            obj[nums[i]] = 1
        }
    }
    const arr = new Array(nums.length)
    for (let key in obj) {
        if (Array.isArray(arr[obj[key]])) {
            arr[obj[key]].push(key)
        } else {
            arr[obj[key]] = [key]
        }
    }
    const res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!arr[i]) continue
        if (res.length == k) return res
        for (let j = 0; j < arr[i].length; j++) {
            if (res.length == k) return res
            res.push(arr[i][j])
        }
    }
    return res
}
}
