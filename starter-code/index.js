class SortedList {
    constructor(items,length) {
      this.items = [];
      this.length = this.items.length;
    }
    
    add(item) {
      this.items.push(item);
      this.length ++;
      this.items.sort((a, b) => a - b);
      }

    get(pos) {
      if (pos > this.length){
        throw new Error("OutOfBounds");
      }
      else {
        return this.items[pos];
      }
    }

    max() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      else {
      return this.items.sort ((a,b) => (b-a))[0];
      }
    }

    min() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      else {
      return this.items.sort ((a,b) => (a-b))[0];    
    }
  }

    average() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      else {
      return this.sum(this.items) / this.length;
    }
  }

    sum() {
      if (this.items.length === 0) {
        return 0;
      }
      else {
        return this.items.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }, 0);
      }
    }
}
  
  module.exports = SortedList;