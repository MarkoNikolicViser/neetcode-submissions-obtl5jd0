class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    const rows = {}
    const cols = {}
    const sqr = {}
    for (let i = 0; i < board.length; i++) {
        const row = board[i]
        for (let j = 0; j < row.length; j++) {
            if (row[j] === '.') continue

            const sqrKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`

            if (rows[i] && rows[i].has(row[j]) || cols[j] && cols[j].has(row[j]) || sqr[sqrKey] && sqr[sqrKey].has(row[j])) return false

            if (rows[i]) {
                rows[i].add(row[j])
            } else {
                const set = new Set()
                rows[i] = set.add(row[j])
            }
            if (cols[j]) {
                cols[j].add(row[j])
            } else {
                const set = new Set()
                cols[j] = set.add(row[j])
            }
            if (sqr[sqrKey]) {
                sqr[sqrKey].add(row[j])
            } else {
                const set = new Set()
                sqr[sqrKey] = set.add(row[j])
            }
        }
    }
        return true

}
}