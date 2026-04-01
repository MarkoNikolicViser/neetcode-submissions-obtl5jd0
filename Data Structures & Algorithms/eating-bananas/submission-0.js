class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1
        let right=Math.max(...piles)
        while(left<=right){
            const mid=Math.trunc((left+right)/2)
            let hours=0
            for(let i=0;i<piles.length;i++){
                hours+=Math.ceil(piles[i]/mid)
            }
            if(hours>h){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return left
    }
}
