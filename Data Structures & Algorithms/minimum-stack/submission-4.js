class MinStack {
    constructor() {
        this.arr=[]
        this.minArr=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
        this.minArr.push(Math.min(this.minArr.length>0?this.minArr[this.minArr.length-1]:val,val))
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop()
        this.minArr.pop()
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
        return this.minArr[this.minArr.length-1]
    }
}
