//array built using class

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    let val = this.data[this.length-1];
    this.data[this.length-1] = undefined;
    this.length--;
    return val;
  }
}

const myNewArray = new MyArray();
myNewArray.push(1);
myNewArray.push(2);
document.getElementById("output").innerHTML = `<h2>${JSON.stringify(
  myNewArray
)}</h2>`;
console.log(myNewArray.get(1));
console.log(myNewArray.pop());
console.log(myNewArray);
