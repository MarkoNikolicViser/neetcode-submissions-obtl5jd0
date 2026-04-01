class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
          let first=0
    let last=numbers.length-1

    while(first<last){
        const neededNum=target-numbers[first]
       if(numbers[last]===neededNum){
        return [first+1,last+1]
       }else if(numbers[last]>neededNum){
        last--
       }else{
        first++
       }
    }
    }
}
