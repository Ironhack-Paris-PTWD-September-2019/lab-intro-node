class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort(function(a,b){
        return a-b;
      })
      this.length += 1;
    }
    get(pos) {
      if (pos <= this.length) {
        return this.items[pos];
      } else {
        throw new Error("OutOfBounds");
      }
    }
    max() {
      if (this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return Math.max(...this.items);
      }      
    }
    min() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return Math.min(...this.items);
      } 
    }
    sum() {
      let somme = 0;
      if (this.length === 0) {
        return 0;
      } else {
        for (let i=0 ; i<this.length ; i++) {
          somme = somme + this.items[i];
        }
        return somme;
      }      
    }
    average() {
      if (this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.sum()/this.length;
      }      
    }
    
  };
  
  module.exports = SortedList;