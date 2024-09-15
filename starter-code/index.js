class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.length += 1;
    }
    get(pos) {
      if (pos <= this.lenght) {
        return this.items(pos); 
      } else {
        throw new Error('OutOfBounds'); 
      }
    }
    max() {
      if (this.items === 0) {
        throw new Error('EmptySortedList');
      } 
        return (this.items.sort()).pop();
        //trier et supprimer le dernier élément d'un tableau et retourne cet élément  
      }
      
    
    min() {
      if (this.items === 0) {
        throw new Error('EmptySortedList');
      } 
        return (this.items.sort()).shift();
        //trier et retirer le premier élément d'un tableau et de renvoyer cet élément  
      
    }
    
    sum() {
      if (this.items.lenght===0) {
        return 0;
      } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer);
      }
      
    }
    
    average() {
      if (this.items.lenght===0) {
        throw new Error ('EmptySortedList');
      }
      return this.sum()/this.items.length
      
    }
  };
  
  module.exports = SortedList;