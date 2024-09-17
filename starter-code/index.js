class SortedList {
    constructor() {
      this.items = [] ; 
      this.length = this.items.length ; 
    }
    add(item) {
      this.items.push(item); 
      this.items.sort(); 
      this.length++ ; 
    }
    get(pos) {
      if (pos > this.length) {
        throw new Error("OutOfBounds") ; 
       } else return this.items[pos] ; 
    }
    max() {
      if (this.length===0) {
        throw new Error("EmptySortedList"); 
      } else this.max = this.items[0];   

      for (let i=0 ; i<this.length ; i++) {
        if (this.items[i]>this.max) {
          this.max=this.items[i] ; 
        }
      } 
      return this.max ; 
    }
    min() {
      if (this.length===0) {
        throw new Error("EmptySortedList"); 
      } else this.min = this.items[0];
      
      for (let i=0 ; i<this.length ; i++) {
        if (this.items[i]<this.min) {
          this.min=this.items[i] ; 
        }
      } 
      return this.min ; 
    }
    average() {
      if (this.length===0) {
        throw new Error("EmptySortedList");
    } ; 
    this.sumsum = 0 ; 
    for (let i=0 ; i<this.length ; i++) {
      this.sumsum += this.items[i] ; 
    } ; 
    this.average = (this.sumsum / this.length) ; 
    return this.average ; 

  }; 
    sum() { 
    if (this.length===0) {
        return 0 ;
    }
    this.sum=0 ; 
    for (let i=0 ; i<this.length ; i++) {
      this.sum += this.items[i] ; 
    } 
    return this.sum ; 
  };
} ; 

module.exports = SortedList;