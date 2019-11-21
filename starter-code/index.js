class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort();
      this.length ++;
    }
    get(pos) {
      if (pos > this.length){
        throw new Error("OutOfBounds");
      } else {
        return this.items[pos];
      }
    }
    max() {
      if (this.items.length === 0 ) {
        throw new Error("EmptySortedList");
      } else return Math.max(...this.items);
      
    }
    min() {
      if (this.items.length === 0 ) {
        throw new Error("EmptySortedList");
      } else {
        return Math.min(...this.items);
      }
    }
    average() {
      if (this.items.length === 0 ) {
        throw new Error("EmptySortedList");
      } else {

        return this.sum()/this.length;
      }

      
    }
    sum() {
      if (this.items.length === 0 ) {
        return 0;
      } else {
        let reducer = this.items.reduce(function (sum, pos){
          sum + pos;
        }, 0) ;
        return reducer;
      }
    }
  };
    
  
  module.exports = SortedList;