class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left=0
        let right=left+1
        let res=0
    while(right<prices.length){
        res=Math.max(res,prices[right]-prices[left])

        if(prices[left]>prices[right]){
            left=right
            right++
        }else{
            right++
        }
    }
    return res
    }
}
