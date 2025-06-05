// import './style.css';

console.log('Connected');

class HashMap {
  constructor(capacity = Array(16).fill(null)) {
      this.loadFactor = .8;
			this.capacity = capacity.fill(null);
      this.entries = 0;
    }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    } 	
    console.log(hashCode);
    return hashCode % this.capacity.length;
  } 

	set(key, value) {
    
		let index = this.hash(key);
    console.log(index);
    this.entries++;
    console.log(`Amount of entries: ${this.entries}`)
    if (this.entries > (this.capacity * this.loadFactor)) {
      console.log('here');
    }
    if (!this.capacity[index]) {
      console.log('helpppp')
      this.capacity[index] = new linkedList();
      this.capacity[index].append(value);
      console.log(`List here ${this.capacity[index].head}`)
      // this.capacity[index] = list.head;
      console.log(`Yoooo ${this.capacity[index]}`);
      return;
    }
    else if (this.capacity[index]) {
      this.capacity[index].append(value);
      console.log(this.capacity[index])
      return;
    }
	}

	get(key) {
		
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

  append(value) {
    const element = new node(value);
    if (!this.head) {
      this.head = element;
      this.size++;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
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
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}


const test = new HashMap();
console.log(test.getCap());
test.set('Levi', 'orange');
test.set('Levi', 'glue');
test.set('Leviia42345', 'orange');
console.log(test.getCap());