class MinStack {
    constructor() {
        this.arr=[]
        this.min=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
        const temp=Math.min(val,this.min.length===0?val:this.min[this.min.length-1])
        this.min.push(temp)
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop()
        this.arr.pop()
    }

    /**
     * @return {number}
     */
    top() {
       return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.min[this.min.length-1]
    }
}
