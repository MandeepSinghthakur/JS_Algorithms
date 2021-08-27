class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            //update old tail next
            this.tail.next = node

            //set new tail
            this.tail = node
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length == 0) {
            return undefined
        }
        var current = this.head
        var newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift() {
        if (this.length === 0)
            return undefined;
        var head = this.head
        this.head = head.next
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return head
    }
    unshift(val) {
        var node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.length++
        } else {
            node.next = this.head
            this.head = node
            this.length++
            return this
        }
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        var counter = 0;
        var current = this.head
        while (counter !== index) {
            current = current.next
            counter++;
        }
        return current
    }
    set(index, value) {
        var node = this.get(index)
        if (node) {
            node.val = value
            return true
        }
        return false

    }
    insert(index, value) {
        let newNode = new Node(value);
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length) {
            this.push(value)
            return true;
        }
        if (index === 0) {
            this.unshift(value);
            return true
        }
        let prev = this.get(index - 1)
        let oldNode = prev.next;
        prev.next = newNode;
        newNode.next = oldNode;
        this.length++
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return undefined
        if (index === this.length - 1) {
            return this.pop(index)
        }
        if (index === 0) {
            return this.shift(index)
        }
        var foundNode = this.get(index - 1)
        var removalNode = foundNode.next
        foundNode.next = removalNode.next
        this.length--
        return removalNode
    }
    reverse() {
        var node = this.head
        this.head = this.tail;
        this.tail = node
        var prev = null;
        var next;
        for (var i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev;
            prev = node
            node = next;
        }
        return this
    }
}
var list = new SinglyLinkedList()
list.push("Hello")
list.push("HI")
list.push(":)")
list.push("GOODBYE")
