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
        if(!root) return true
        const left=Math.max(this.max(root.left))
        const right=Math.max(this.max(root.right))
        if(Math.abs(left-right)>1)return false

        return this.isBalanced(root.right)&&this.isBalanced(root.left)
    }
    max(root){
        if(!root)return 0
        return 1+Math.max(this.max(root.left),this.max(root.right))
    }
}
