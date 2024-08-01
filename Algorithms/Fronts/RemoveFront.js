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
  
    removeFront() {
      if (this.head === null) {
        return null;
      }
      this.head = this.head.next;
      return this.head;
    }
  }
  
  const SLL1 = new SLL();
  
  SLL1.head = new Node(18);
  SLL1.head = new Node(5);
  SLL1.head.next = new Node(18);
  SLL1.head = new Node(73);
  SLL1.head.next = new Node(5);
  SLL1.head.next.next = new Node(18);
  
  console.log(SLL1.removeFront()); 
  console.log(SLL1.removeFront()); 

  