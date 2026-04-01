class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
 const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (obj.hasOwnProperty(element)) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }
  const arr = [];
  for (let key in obj) {
    const element = obj[key];
    if (arr[element]) {
      arr[element].push(key);
    } else {
      arr[element] = [key];
    }
  }
  // [3:[1],2:[2],1:[3,100]]
  const res = [];
  for (let i = nums.length; i >= 1; i--) {
    let element = arr[i];
    if (res.length === k) {
      return res;
    }
    if (element) {
      for (let j = 0; j < element.length; j++) {
        if (res.length === k) {
          return res;
        }
        res.push(element[j]);
      }
    }
  }
  return res;
    }
}
