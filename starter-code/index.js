class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort(function compare(a, b) {
        if (a < b) return -1; 
        if (a > b) return 1; 
        if (a === b) return 0;
      });
      this.length++; 
    }
    get(pos) {
      if (pos <= this.length) {
        return this.items[pos];
      }else {
        throw new Error ("OutOfBounds");
      }
    }
    max() {
      if (this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      return Math.max(...this.items);

    }
    min() {
      if (this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      return Math.min(...this.items);
    }
    average() {
      
    }
    sum() {}
  };
  
  module.exports = SortedList;