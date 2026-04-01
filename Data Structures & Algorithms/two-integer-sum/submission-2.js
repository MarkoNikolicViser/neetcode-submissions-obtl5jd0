class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const response = [];
            const recursive = (current) => {
            if (current === nums.length - 1) {
                return;
            }
            const tar = target - nums[current];
            for (let i = current+1; i < nums.length; i++) {
                if (tar === nums[i]) {
                response.push(current);
                response.push(i);
                return;
                }
            }
            recursive(current + 1);
            };
            recursive(0);
            return response
    }
}
