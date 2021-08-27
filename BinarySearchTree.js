class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value === current.value) {
                return undefined
            }
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right

            }
        }
    }

    find(val) {
        if (this.root === null)
            return false
        var current = this.root
        found = false;
        while (current && !found) {
            if (val < current.value) {
                current = current.left
            } else if (val > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (found === false) {
            return false
        }
        return current;
    }

    bfs() {
        var queue = [];
        var visited = []
        var node = this.root
        if (!this.root)
            return visited
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            visited.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return visited
    }

    dfsPreOrder() {
        let visited = [];
        let current = this.root;
        function traverse(node) {
            visited.push(node.value)
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        return visited;
    }

    dfsPostOrder() {
        let visited = []
        let current = this.root
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            visited.push(node.value)
        }
        traverse(current);
        return visited
    }
    dfsInOrder() {
        let visited = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            visited.push(node.value)
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        return visited;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.dfsPreOrder()
tree.dfsPostOrder()
tree.dfsInOrder()
