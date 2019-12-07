class SortedList {
    constructor() {
      this.items=[];
      this.length=0
    }
    add(item) {
      this.items.push(item);
     this.items.sort((a,b)=>(a-b))
      this.length +=1;

    }
    get(pos) {
        return this.items[pos];

    }
    max() {
      if (this.length===0){
        throw new Error("EmptySortedList")
      } else return this.items [this.length-1]


    }
    min() {
      if (this.length === 0){
        throw new Error("EmptySortedList");
      } else return this.items[0]; 
  
    }

    average() {
      if(this.items.length==0){
        throw new Error("EmptySortedList");
      } else {
        return this.sum()/this.length;
      }
    }
    sum() { 
      if(this.length==0) return 0; 
      return this.items.reduce(((acc,currentValue)=>acc+currentValue),0);

  }

    }
  
  module.exports = SortedList;