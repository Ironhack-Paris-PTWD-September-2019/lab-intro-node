class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length++;
      this.items.sort((a, b) => a - b);
    }
    get(pos) {
      if(pos <= this.length) {
        return this.items[pos];
      }
    }
    max() {
      if(this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items.sort((a, b) => b - a)[0]; // DESC
      }
    }
    min() {
      if(this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items.sort((a, b) => a - b)[0]; // ASC
      }      
    }
    average() {
      if(this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.sum() / this.length;
      }
    }
    sum() {
      if(this.length === 0) {
        return 0;
      } else {
        return this.items.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }, 0);
      }
    }
  };
  
  module.exports = SortedList;