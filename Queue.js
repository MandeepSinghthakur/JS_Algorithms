class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    inqueue(val) {
        let newNode = newNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.size++
        return this.size
    }
    dequeue() {
        if (!this.first)
            return null;
        let oldFirst = this.first
        this.first = this.first.next
        oldFirst.next = null
        this.size--
        if (this.size == 0) {
            this.last = null
        }
        return oldFirst
    }
}
