class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
  let left = 0;
  let max = 0;
  const obj = {};
  for (let right = 0; right < s.length; right++) {
    if (obj[s[right]]) {
      obj[s[right]] += 1;
    } else {
      obj[s[right]] = 1;
    }

    while (right - left + 1 - Math.max(...Object.values(obj)) > k) {
      obj[s[left]] -= 1;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
}
