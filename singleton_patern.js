var obj = null;
class Singleton {
  constructor(example) {
    if(!obj) {
      obj = this;
    }
    this.example = example;
    return obj;
  }
}

let a = new Singleton(555);
let b = new Singleton(666);
console.log(a);
console.log(b);
console.log(a === b);
let d = new Singleton();
console.log(d);