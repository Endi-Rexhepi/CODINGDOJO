class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;
    }

    display() {
        let runner = this.head;
        let values = [];
        while (runner !== null) {
            values.push(runner.data);
            runner = runner.next;
        }
        return values.join(", ");
    }
}

let SLL1 = new SLL();
console.log(SLL1.addFront(76)); 
console.log(SLL1.addFront(2)); 
console.log(SLL1.display()); 
console.log(SLL1.addFront(11.41)); 
console.log(SLL1.display()); 