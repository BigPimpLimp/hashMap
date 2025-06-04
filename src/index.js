import './style.css';

console.log('Connected');

class HashMap {
  constructor(loadFactor, capacity) {
      this.loadFactor = loadFactor;
			this.capacity = capacity;
    }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    } 	
 
    return hashCode % 2;
  } 

	set(key, value) {
		const hashKey = hash(key);


		
	}

	get(key) {
		
	}
	
}