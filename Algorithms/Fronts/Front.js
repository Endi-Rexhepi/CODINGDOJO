class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeFront() {
        if (this.head == null) {
            return null;
        }
        const removedValue = this.head.value;
        this.head = this.head.next;
        return removedValue;
    }

    front() {
        if (this.head == null) {
            return null;
        }
        return this.head.value;
    }
}

const SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1.front()); 
SLL1.removeFront();
console.log(SLL1.front()); 
console.log(SLL1.front()); 
