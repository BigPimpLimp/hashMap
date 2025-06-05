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
    if (this.capacity[index]) {
      console.log('value is already here')
      
    }
    this.capacity[index] = value;
    console.log(this.capacity[index]);
		
	}

	get(key) {
		
	}
	
  getCap() {
    return this.capacity;
  }
}

const test = new HashMap();
console.log(test.getCap());
test.set('Levi', 'orange');
test.set('Levi', 'glue');
test.set('Leviia42345', 'orange');
console.log(test.getCap());