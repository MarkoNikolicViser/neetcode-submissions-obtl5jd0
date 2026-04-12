class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
  const rows = {};
  const cols = {};
  const sqrs = {};
  for (let i = 0; i < board.length; i++) {
    const subArr = board[i];
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] === '.') continue;
      const sqrKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
      if (
        (rows[i] && rows[i].has(subArr[j])) ||
        (cols[j] && cols[j].has(subArr[j])) ||
        (sqrs[sqrKey] && sqrs[sqrKey].has(subArr[j]))
      ) {
        return false;
      }
      if (rows[i]) {
        rows[i].add(subArr[j]);
      } else {
        const set = new Set();
        set.add(subArr[j]);
        rows[i] = set;
      }
      if (cols[j]) {
        cols[j].add(subArr[j]);
      } else {
        const set = new Set();
        set.add(subArr[j]);
        cols[j] = set;
      }
      if (sqrs[sqrKey]) {
        sqrs[sqrKey].add(subArr[j]);
      } else {
        const set = new Set();
        set.add(subArr[j]);
        sqrs[sqrKey] = set;
      }
    }
  }
  return true;
}
}