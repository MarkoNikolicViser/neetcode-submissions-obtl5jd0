class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowObj={}
        const colObj={}
        const sqrObj={}
        for(let i=0;i<board.length;i++){
            const subArray=board[i]
            for(let j=0;j<subArray.length;j++){
                const element=subArray[j]
                if(element==='.'){
                    continue
                }
                const sqrObjKey=`${Math.floor(i/3)},${Math.floor(j/3)}`
                if(rowObj.hasOwnProperty(i)&&rowObj[i].has(element)||
                colObj.hasOwnProperty(j)&&colObj[j].has(element)||
                sqrObj.hasOwnProperty(sqrObjKey)&&sqrObj[sqrObjKey].has(element)){
                    return false
                }
                if(!rowObj.hasOwnProperty(i)){
                    rowObj[i]=new Set()
                }
                if(!colObj.hasOwnProperty(j)){
                    colObj[j]=new Set()
                }
                if(!sqrObj.hasOwnProperty(sqrObjKey)){
                    sqrObj[sqrObjKey]=new Set()
                }
                rowObj[i].add(element)
                colObj[j].add(element)
                sqrObj[sqrObjKey].add(element)
            }
        }
        return true
    }
}
