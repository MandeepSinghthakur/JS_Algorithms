class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0 ;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.first) { 
            this.first = newNode;
            this.last = newNode
        } else {
            var oldFirst = this.first
            this.first= newNode;
             this.first.next = oldFirst
        }
        this.size++
        return this.size
      }
     
     pop() {
         if(!this.first) return null
         let oldHead = this.first
         this.first = oldHead.next
         oldHead.next = null
         this.size--
         if(this.size ==0) {
             this.first = null
             this.last = null
         }
         return  oldHead
     }
}

stack = new Stack()
stack.push("Fourth")
stack.push("Third")
stack.push("SECOND")
stack.push("First")