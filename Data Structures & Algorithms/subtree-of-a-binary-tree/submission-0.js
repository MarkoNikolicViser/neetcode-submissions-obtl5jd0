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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true
        if(!root)return false

        if(this.isSameTree(root,subRoot)){
            return true
        }

        return this.isSubtree(root.left,subRoot)||this.isSubtree(root.right,subRoot)
    }
    isSameTree(first,second){
        // if(!first||!second)return false
        if(!first&&!second)return true

        if(first&&second&&first.val===second.val){
            return this.isSameTree(first.left,second.left)&&
                   this.isSameTree(first.right,second.right)
        }
        return false
    }
}
