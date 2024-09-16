class SortedList {
    constructor() {
      this.items =[];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort(function(a, b) {
        return a - b;
      });
      this.length ++;
    }
    get(pos) {
      if(pos > this.items.length) {
        throw new Error("OutOfBounds")
      }
      else {
        return this.items[pos];
      }
    }
    max() {
      if(this.items.length === 0) {
        throw new Error("EmptySortedList")
      }
      else {
        var max = 0;
        this.items.forEach(function(item) {
          if(item > max) {
            max = item;
          }
        })
        return max
      }
    }
    min() {
      if(this.items.length === 0) {
        throw new Error("EmptySortedList")
      }
      else {
        var min = 100;
        this.items.forEach(function(item) {
          if(item < min) {
            min = item;
          }
        })
        return min
      }
    }
    average() {
      if(this.items.length === 0) {
        throw new Error("EmptySortedList")
      }
      else{
        var sum = this.items.reduce(function(acc , cur) {
          return acc + cur;
        },0)
        var total = this.items.length;
        var average = sum / total;
      }
      return average;
    }
    sum() {
      if(this.items.length === 0) {
        return 0;
      }
      else {
        var sum = this.items.reduce(function(acc , cur) {
          return acc + cur;
        },0)
        return sum;
      }
    }
  };
  
  module.exports = SortedList;