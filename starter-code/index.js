class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }

    add(item) {
      this.items.push(item);
      this.items.sort(function(a, b){
        return a - b;
      })
      this.length += 1;
    }

    get(pos) {
      if (pos >= 0 || pos <= this.items.length) {
        return this.items[pos];
      } else {
        throw new Error("OutOfBounds");
      }
    }

    max() {
      if (this.items.length) {
        return Math.max(...this.items);
      } else {
        throw new Error("EmptySortedList");
      }
    }

    min() {
      if (this.items.length) {
        return Math.min(...this.items);
      } else {
        throw new Error("EmptySortedList");
      }
    }

    average() {
      if (this.items.length) {
        return this.sum() / this.items.length;
      } else {
        throw new Error("EmptySortedList");
      }
    }

    sum() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      if (this.items.length) {
        return this.items.reduce(reducer);
      } else {
        return 0;
      }
    }
  };
  
  module.exports = SortedList;