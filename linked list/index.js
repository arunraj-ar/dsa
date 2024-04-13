// 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: {
//           value: 8,
//           next: {
//             value: 4,
//             next: {
//               value: 2,
//               next: {
//                 value: 1,
//                 next: null,
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  newNode(value) {
    return {
      value: value,
      next: null,
    };
  }

  append(value) {
    this.tail.next = this.newNode(value);
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value) {
    let node = this.newNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  getNodeBefore(index) {
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (node.next) {
        node = node.next;
      } else{
        break;
      }
    }
    return node;
  }

  insert(value, index) {
    if(index === 0){
        this.prepend(value);
        this.length++;
        return;
    }
    let newNode = this.newNode(value);
    const node = this.getNodeBefore(index)
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
  }

  printList() {
    let node = this.head;
    const res = [];
    while (node.next) {
      res.push(node.value);
      node = node.next;
    }
    res.push(node.value);
    return res;
  }

  delete(index) {
    if(index===0){
        this.head=this.head.next;
        this.length--;
        return;
    }
    const node = this.getNodeBefore(index);
    if (node.next) {
      node.next = node.next.next;
    } else {
      node.next = null;
    }
    this.length--;

  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(8);
myLinkedList.append(4);
myLinkedList.append(2);
myLinkedList.append(1);
myLinkedList.insert(100, 5);
myLinkedList.prepend(1000);
console.log(myLinkedList.printList());
myLinkedList.delete(0);
myLinkedList.delete(6);
myLinkedList.delete(6);


console.log(myLinkedList.printList());