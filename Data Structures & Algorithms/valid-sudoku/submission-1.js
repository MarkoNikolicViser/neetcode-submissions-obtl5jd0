class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // rows={1:[1,2,3]}
        // cols={1:[1,2,3]}
        // squares={[1,3]:[1,2,3]}
 const rowObj = {}
    const colObj = {}
    const sqrObj = {}
    for (let i = 0; i < 9; i++) {
        rowObj[i] = new Set()
        colObj[i] = new Set()
    }
    let j = 0
    for (let i = 0; i < board.length; i++) {
        const row = board[i]
        for (j = 0; j < row.length; j++) {
            const element = row[j]
            if (element === '.') {
                continue
            }
            const key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`
            if (rowObj[i].has(element) || colObj[j].has(element) || (sqrObj.hasOwnProperty(key) && sqrObj[key].has(element))) {
                return false
            }
            rowObj[`${i}`].add(element)
            colObj[`${j}`].add(element)
            if (sqrObj.hasOwnProperty(key)) {
                sqrObj[key].add(element)
            } else {
                sqrObj[key] = new Set()
                sqrObj[key].add(element)
            }
        }
    }
    return true

    }
}
