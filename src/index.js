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
    }
    return hashCode % this.capacity.length;
  }

  set(key, value) {
    const index = this.hash(key);
    this.entries++;

    if (this.entries > this.capacity.length * this.loadFactor) {
      console.log("---- Load factor exceeded ----");
      const copy = this.nodes();
      this.clear(this.capacity.length * 2); //Clears all key and value pairs and doubles capacity size
      this.entries = 0;
      copy.forEach((e) => {
        this.set(e.key, e.value);
      });
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
    let index = this.hash(key);
    if (this.capacity[index] === null) {
      return null;
    }
    if (this.capacity[index].head.key === key) {
      return this.capacity[index].head.value;
    }
    if (this.capacity[index].head.nextNode) {
      let current = this.capacity[index].head.nextNode;
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.nextNode;
      }
      return null;
    }
    return null;
  }

  has(key) {
    if (this.get(key)) {
      return true;
    }
    return false;
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    }
    let index = this.hash(key);
    let current = this.capacity[index].head;
    this.capacity[index] = null;

    const nodes = [];
    while (current) {
      if (current.key === key) {
        current = current.nextNode;
        continue;
      }
      nodes.push(current);
      current = current.nextNode;
    }
    nodes.forEach((e) => {
      if (!e) return;
      this.set(e.key, e.value);
    });
    return true;
  }

  length() {
    let count = 0;
    this.capacity.forEach((e) => {
      if (e) {
        count += e.size;
      }
    });
    return count;
  }

  clear(size) {
    this.capacity = Array(size).fill(null);
  }

  keys() {
    const arr = [];
    this.capacity.forEach((e) => {
      if (!e) {
        return;
      }
      if (e.size > 1) {
        let current = e.head;
        while (current.nextNode) {
          arr.push(current.key);
          current = current.nextNode;
        }
      }
      arr.push(e.head.key);
    });
    return arr;
  }

  values() {
    const arr = [];
    this.capacity.forEach((e) => {
      if (!e) {
        return;
      }
      if (e.size > 1) {
        let current = e.head;
        while (current.nextNode) {
          arr.push(current.value);
          current = current.nextNode;
        }
      }
      arr.push(e.head.value);
    });
    return arr;
  }

  nodes() {
    const arr = [];
    this.capacity.forEach((e) => {
      if (!e) {
        return;
      }
      if (e.size > 1) {
        let current = e.head;
        while (current.nextNode) {
          arr.push(current);
          current = current.nextNode;
        }
        arr.push(e.tail);
        return;
      }
      arr.push(e.head);
    });
    return arr;
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
      return;
    } else {
      let current = this.head;
      while (current.nextNode) {
        if (element.key === current.key) {
          current.value = element.value;
          return;
        }
        current = current.nextNode;
      }
      if (element.key === current.key) {
        current.value = element.value;
        return;
      }
      current.nextNode = element;
      this.tail = element;
      this.size++;
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
test.set("noil", "bahaha");
test.set("moon", "silver");
test.set("love", "karah");
test.set("levi", "kjahsfd");
test.set("kajshflaksjhdff", "blue");
console.log(test.getCap());
console.log(test.nodes());
test.remove("dog");

console.log(test.remove("lion"));
test.set("lion", "orange");
console.log(test.getCap());
