class MinStack {
    constructor() {
      this.arr=[];
      this.minArr=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val)
        let tempVal=Math.min(val,this.minArr.length===0?val:this.minArr[this.minArr.length-1])
        this.minArr.push(tempVal)
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
