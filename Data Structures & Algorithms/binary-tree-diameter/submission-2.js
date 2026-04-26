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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return null
        const left=Math.max(this.maxD(root.left))
        const right=Math.max(this.maxD(root.right))
        const diam=left+right
        const sub=Math.max(this.diameterOfBinaryTree(root.left),this.diameterOfBinaryTree(root.right))
        return Math.max(diam,sub)
    }
    maxD(root){
        if(!root) return 0
        return 1+Math.max(this.maxD(root.left),this.maxD(root.right))
    }
}
