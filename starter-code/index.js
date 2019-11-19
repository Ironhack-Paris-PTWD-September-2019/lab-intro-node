class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort(function(a,b) {
        return a-b;
      });
      this.length = this.length + 1;
    }
    get(pos) {
      this.length = this.items.length;
      if (pos > this.length) {
        throw new Error("OutOfBounds");
      }
      return this.items[pos];
    }
    max() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      return this.items[this.length-1];
    }
    min() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      return this.items[0];
    }
    average() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
      return this.sum()/this.length;
    }
    sum() {
      if (this.items.length === 0) {
        return 0;
      } else {
        var sum = 0;
        for (var i = 0; i<this.items.length; i++) {
          sum = sum + this.items[i];
        }
        return sum;
      }
    }
  };
  
  module.exports = SortedList;