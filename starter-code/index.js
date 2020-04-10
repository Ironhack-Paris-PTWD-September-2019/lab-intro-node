class SortedList {
    constructor() {
      this.items = [],
      this.length = this.items.length; // 0
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length; // 1
      this.items.sort(function(a, b) {
        return a - b;
      });

    }
    get(pos) {
      return this.items[pos]
    }
    max() {
      if(this.length===0){
        throw new Error("EmptySortedList")
      } else {return this.items[this.length-1]}
    }
    min(){
      if(this.length===0){
        throw new Error("EmptySortedList")
      } else {return this.items[0]}
    }
    average() {
      if(this.length===0){
        throw new Error("EmptySortedList")
      } else {
        return this.items.reduce((accumulator, el) => accumulator + el)/this.length
      }
    }
    sum() {
      if(this.length===0){
        return 0
      } else {
        return this.items.reduce((accumulator, el) => accumulator + el)
      }
    }
  };
  
  module.exports = SortedList;