'use strict';

class HashTable {
  constructor(size = 100) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);

    return index;
  }

  get(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
  }

  contains(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    return true;
  }
}

module.exports = HashTable;
