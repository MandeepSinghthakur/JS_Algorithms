class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkdown();
        }
        return max;

    }
    sinkdown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap == null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }

            if (swap === null)
                break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap;
        }
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent)
                break;
            this.values[parentIdx] = element;
            this.values[index] = parent
            index = parentIdx
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);

//[41,39,33,18,27,12]
