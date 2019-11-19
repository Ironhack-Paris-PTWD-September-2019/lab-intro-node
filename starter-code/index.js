class SortedList {
    constructor(length,items) {
      this.length=0;
      this.items=[];
    }
    add(item) {
      this.items.push(item);
      this.length +=1;
      return this.items.sort((a, b) => a - b);

    }
    get(pos) {
    return this.items[pos]; 
    }
    max() {
      if (this.length===0){
        throw new Error("EmptySortedList"); 
      } else {
      return this.items.sort((a, b) => b - a)[0];
      } 
    }
    min() {
      if (this.length===0){
        throw new Error("EmptySortedList");
      } else {
      return this.items.sort((a, b) => a - b)[0];
      } 
    }
    average() {
      if (this.length===0){
        throw new Error("EmptySortedList");
      } else {
        return this.sum()/this.length;
      }
    }
    sum() {
      if (this.length===0){
        return 0; 
      } else {
        return this.items.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }, 0);
      }
    }
  };
  
  module.exports = SortedList;