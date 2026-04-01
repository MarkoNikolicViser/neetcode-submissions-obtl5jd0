class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===numbers[i+1]){
            continue
        }
    const neededNum=target-numbers[i]
    if(numbers.includes(neededNum)){
        return [i+1,numbers.indexOf(neededNum)+1]
        }
    }
    }
}
