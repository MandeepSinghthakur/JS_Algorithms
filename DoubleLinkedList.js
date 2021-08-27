class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop() {
        if (this.length == 0)
            return undefined;
        let tail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--
            return tail
        } else {
            let preNode = this.tail.prev;
            preNode.next = null;
            this.tail = preNode
            tail.prev = null;
        }
        this.length--;
        return tail
    }
    shift() {
        if (!this.head)
            return undefined;
        let removedNode = this.head
        if (this.length == 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = removedNode.next
            this.head.prev = null
            removedNode.next = null;
        }
        this.length--;
        return removedNode
    }
    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            var oldHead = this.head
            this.head.prev = newNode
            this.head = newNode
            newNode.next = oldHead
        }
        this.length++
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index <= this.length / 2) {
            var count = 0;
            var current = this.head;
            while (count != index) {
                current = current.next
                count++;
            }
        } else {
            var count = this.length - 1
            var current = this.tail
            while (count != index) {
                current = current.prev
                count--
            }
        }
        return current
    }
    set(index, value) {
        let newNode = new Node(value)
        let node = this.get(index)
        if (node != null) {
            node.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        let newNode = new Node(val);
        if (index < 0 || index > this.length)
            return false
        if (index === 0) {
            this.unshift(val)
            return true
        }
        if (index === this.length) {
            this.push(val)
            return true
        } else {
            let prevValue = this.get(index - 1)
            let oldValue = prevValue.next
            prevValue.next = newNode;
            oldValue.prev = newNode;
            newNode.prev = prevValue;
            newNode.next = oldValue;
            this.length++
        }
        return true
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0 ) return this.shift(index);
        if(index === this.length -1) return this.pop(index);
        let nodeToRemove = this.get(index)
           nodeToRemove.prev.next = nodeToRemove.next
           nodeToRemove.next.prev = nodeToRemove.prev
           nodeToRemove.next = null
           nodeToRemove.prev = null
           this.length --;
          return nodeToRemove;
    }
    reverse(){
        var current = this.head
        while(current != null){
            var temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }
        let tail = this.tail;
        this.tail = this.head
        this.head = tail
        return this
    }
}
list = new DoublyLinkedList()
list.push("2")
list.push("3")
