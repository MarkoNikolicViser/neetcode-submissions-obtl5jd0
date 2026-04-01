class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
  if (strs.length === 0) {
    return "";
  }
  const formatted = strs.map((m) => `${m.length}#${m}`);
  return formatted.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const resArr = [];
  let index = 0;

  while (index < str.length) {
    let j = index;
    while (str[j] !== "#") {
      j += 1;
          }
      const wordLength = Number(str.substring(index, j));
      resArr.push(str.substring(j + 1, j + 1 + wordLength));
      index = j + 1 + wordLength;
  }
  return resArr;
}}
