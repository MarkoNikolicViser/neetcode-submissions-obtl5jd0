/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
     isBalanced(root) {
        if(!root)return true
        const maxLeft=Math.max(this.maxHeight(root.left))
        const maxRight=Math.max(this.maxHeight(root.right))
        const diff=Math.max(maxLeft,maxRight)-Math.min(maxLeft,maxRight)
        if(diff>1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    maxHeight(root){
        if(!root)return 0
        return 1+Math.max(this.maxHeight(root.left),this.maxHeight(root.right))
    }
}