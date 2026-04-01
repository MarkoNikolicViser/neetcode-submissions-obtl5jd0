class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         const rowMap={}
    const colMap={}
    const squareMap={}

    for(var i=0;i<board.length;i++){
        const subArray=board[i]
        for(let j=0;j<subArray.length;j++){
            const element=subArray[j]
            if(element==='.'){
                continue
            }
             let key=`${Math.floor(i/3)},${Math.floor(j/3)}`
            if(rowMap[i]?.has(element)||colMap[j]?.has(element)||squareMap[key]?.has(element)){
                return false
            }
           if(!rowMap.hasOwnProperty(i)){
            rowMap[i]=new Set()
           }
            rowMap[i].add(element)

           if(!colMap.hasOwnProperty(j)){
                    colMap[j]=new Set()
            }
            colMap[j].add(element)

           if(!squareMap.hasOwnProperty(key)){
            squareMap[key]=new Set()
            squareMap[key].add(element)
        }
    }
}
return true
    }
}
