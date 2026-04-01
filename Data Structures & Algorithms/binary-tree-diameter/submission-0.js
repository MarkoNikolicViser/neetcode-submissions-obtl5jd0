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
        if(!root) return 0
        let resLeft=this.maxHeight(root.left)
        let resRight=this.maxHeight(root.right)
        const diameter=resLeft+resRight
        const sub=Math.max(this.diameterOfBinaryTree(root.right),this.diameterOfBinaryTree(root.left))
        return Math.max(sub,diameter)
    }
    maxHeight(root){
        if(!root)return 0
        return 1+Math.max(this.maxHeight(root.left),this.maxHeight(root.right))
    }
}
