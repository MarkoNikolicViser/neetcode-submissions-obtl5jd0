class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  const obj = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    const key = new Array(27).fill(0);
    for (let j = 0; j < str.length; j++) {
      const code = str[j].charCodeAt() - 97;
      key[code] += 1;
    }
    const strKey = key.join(",");
    if (!obj[strKey]) {
      obj[strKey] = [str];
    } else {
      obj[strKey].push(str);
    }
  }
  return [...Object.values(obj)];
}
}
