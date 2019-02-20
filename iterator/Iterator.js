class Iterator {
  constructor(items=[]) {
    this.index = 0;
    this.items = items;
  }

  next(){
    if(this.hasNext()){
      this.index += 1;
    }
    return this.current();
  }

  prev(){
    if(this.index !== 0){
      this.index -= 1;
    }

    return this.current();
  }

  last() {
    var [last] = [...this.items].reverse();
    return last;
  }

  first(){
    var [first] = this.items;
    return first;
  }

  hasNext(){
    return this.index < this.items.length -1;
  }

  current(){
    return this.items[this.index];
  }
}

module.exports = Iterator;
