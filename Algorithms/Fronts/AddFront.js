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
  }

  const SLL1 = new SLL();
  console.log(SLL1.addFront(18)); 
  console.log(SLL1.addFront(5));  
  console.log(SLL1.addFront(73)); 
  