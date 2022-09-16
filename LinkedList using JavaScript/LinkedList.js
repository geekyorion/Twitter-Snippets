class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new ListNode(value);

    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    return this;    // for chaining support;
  }
}

const list = new LinkedList();
list.addNode(10).addNode(20).addNode(30);

console.log(list);
// list => {
//   head: { value: 10, next: { value: 20, next: { value: 30, next: null }}},
//   tail: { value: 30, next: null }
// }
