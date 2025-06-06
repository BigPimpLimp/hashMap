// import './style.css';

console.log("Connected");

class HashMap {
  constructor(capacity = Array(16).fill(null)) {
    this.loadFactor = 0.75;
    this.capacity = capacity.fill(null);
    this.entries = 0;
  }

  hash(key) {
    let hashCode = 0;
    console.log(`Key being hashed: ${key}`);
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      console.log(`Hash: code ${hashCode}`);
    }
    console.log(hashCode);
    return hashCode % this.capacity.length; //When loadfactor is exceeded, length is extended
    //and causes issues with get() returning correct bucket
    //Instead of extending current array, I may need to create
    //a new one that is double the size the copy current nodes
    //evenly across.
  }

  set(key, value) {
    const index = this.hash(key);
    console.log(index);
    this.entries++;
    console.log(`Amount of entries: ${this.entries}`);

    if (this.entries > this.capacity.length * this.loadFactor) {
      console.log("entries exceeded load factor");
      this.capacity.length = this.capacity.length * 2;
      let arr = [];
      arr.length = this.capacity.length * 2;
      arr.forEach((e) => {});
    }
    if (!this.capacity[index]) {
      this.capacity[index] = new linkedList();
      this.capacity[index].append(key, value);
      return;
    }
    if (this.capacity[index]) {
      this.capacity[index].append(key, value);
      return;
    }
  }

  get(key) {
    console.log(key);
    let index = this.hash(key);
    console.log(index);
    console.log(this.capacity[index].key);
    if (this.capacity[index].head.key === key) {
      return this.capacity[index].head.value;
    }
    let current = this.capacity[index].head.key;
    console.log(`Look here bruh ${current}`); //This is returning null
    if (this.capacity[index].head.nextNode) {
      let current = this.capacity[index].head.nextNode;
      console.log(`Look here bruh ${current.key}`);
      while (current.nextNode) {
        if (current.key === key) {
          return current.value;
        }
        current = current.nextNode;
      }
      return null;
    }

    return null;
  }

  getCap() {
    return this.capacity;
  }
}

class linkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.size = 0;
  }

  append(key, value) {
    const element = new node(key, value);

    if (!this.head) {
      this.head = element;
      this.size++;
    } else {
      let current = this.head;
      // console.log(`Current key here ${current.key} current value ${current.value}`)
      // console.log(`Element key here ${element.key} element value ${element.value}`)
      while (current.nextNode) {
        if (element.key === current.key) {
          console.log("mother fuckkkkk");
          current.value = element.value;
        }
        current = current.nextNode;
      }
      if (element.key === current.key) {
        console.log("fuckkkkk");
        current.value = element.value;
        return;
      }
      current.nextNode = element;
      this.tail = element;
      this.size++;
    }
  }

  returnHead() {
    return this.head.value;
  }

  returnTail() {
    return this.tail.value;
  }

  pop() {
    let current = this.head;
    while (current) {
      if (current.nextNode === this.tail) {
        this.tail = current;
        current.nextNode = null;
      }
      current = current.nextNode;
    }
  }

  toString() {
    let string = `( ${this.head.value} )`;
    let current = this.head;
    while (current.nextNode) {
      string += ` -> ( ${current.nextNode.value} )`;
      current = current.nextNode;
    }
  }
}

class node {
  constructor(key, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

const test = new HashMap();
console.log(test.getCap());
test.set("Sara", "blue");
test.set("raSa");
test.set("Rama", "orange");
test.set("Sita", "glue");
test.set("Leviia42345", "orange");
test.set("Levi", "blue");
test.set("Levi", "red");
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.getCap());
console.log(test.get("dog")); //This is returning null for some reason
