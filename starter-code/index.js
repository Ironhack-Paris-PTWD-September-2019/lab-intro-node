class SortedList {
    constructor() {
      this.items=[];
      this.length=0; 

    }

    add(item) {
      this.items.push(item);
      this.length+=1; 
      this.items.sort((a,b)=>{return a-b});
    }

    get(pos) {
      try {
        return this.items[pos];
      } catch (err) {
        throw new Error("OutOfBounds");
      }
      
    }

    max() {
      if(this.items.length==0){
        throw new Error("EmptySortedList");
      }else {
        return Math.max(...this.items);
      }
    }

    min() {
      if(this.items.length==0){
        throw new Error("EmptySortedList");
      }else {
        return Math.min(...this.items);
      }
    }
    average() {
      if(this.items.length==0){
        throw new Error("EmptySortedList");
      }else {
        return this.sum()/this.length;
      }

    }
    sum() {
      if(this.length==0) return 0; 
      return this.items.reduce(((acc,currentValue)=>acc+currentValue),0);

    }
  };
  
  module.exports = SortedList;