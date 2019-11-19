class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }

    add(item) {
      this.items.push(item);
      this.length += 1;
      this.items.sort((a,b)=>(a-b));
    }

    get(pos) {
     try {
      return this.items[pos];
       } 
       catch(error){
         throw new Error("OutofBounds")
       }
  }

    max() {
      if (this.length === 0){
        throw new Error("EmptySortedList");
      } else return this.items[this.length-1]; 
    }

    min() {
      if (this.length === 0){
        throw new Error("EmptySortedList");
      } else return this.items[0]; 
    }

    average() {
      if (this.length === 0){
        throw new Error("EmptySortedList");
      } else return this.items.reduce((a, b)=> a + b,0)/this.length; 
    }

    sum() {
      if (this.length === 0){
        return 0;
      } else return this.items.reduce((a, b)=> a + b,0); 
    }
  };
  
  module.exports = SortedList;