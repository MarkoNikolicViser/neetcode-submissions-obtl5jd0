class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left=0
        let right=1
        let res=0
        while(right<prices.length){
            if(prices[left]<prices[right]){
                res=Math.max(res,prices[right]-prices[left])
                right++
            }else{
                left=right
                right++
            }
        }
        return res
    }
}
