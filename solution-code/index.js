class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    });
    this.length++;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }
  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }

    let maximum = -Infinity;
    this.items.forEach(item => {
      if (item > maximum) maximum = item;
    });

    return maximum;
  }
  min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }

    let minimum = Infinity;
    this.items.forEach(item => {
      if (item < minimum) minimum = item;
    });

    return minimum;
  }
  average() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }
    
    return this.sum(this.items)/this.length;
  }
  sum() {
    return this.items.reduce((acc, item) => acc + item, 0);
  }
};

module.exports = SortedList;