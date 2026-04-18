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
  const res = [];
  let i = 0;
  while (i < str.length) {
    let count = i;
    while (str[count] !== "#") {
      count++;
    }
    const len = Number(str.slice(i, count));
    let word = str.slice(count + 1, len + count + 1);
    res.push(word);
    i = count + len + 1;
  }
  return res;
}
}
