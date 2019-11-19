class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort(function (a, b) {
      return a - b;
    })
    this.length += 1;
  }

  get(pos) {
    try {
      return this.items[pos]
    }
    catch (e) {
      throw e
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let sum = this.items.reduce((acc, currentValue) => acc + currentValue, 0)
      return sum / this.length
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((acc, currentValue) => acc + currentValue, 0)
    }
  }

};

module.exports = SortedList;