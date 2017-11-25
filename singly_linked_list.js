function LL() {
  let head = null;
  function Node(elem) {
    this.elem = elem;
    this.next = null;
  }
  this.insert = function(elem) {
    let node = new Node(elem);
    if(!head) {
      head = node;
      return this;
    }
    let currentNode = head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  this.removeAt = function(pos) {
    if(pos < 0 || !head) {
      throw new Error('Invalid position.');
    }
    let currentNode = head;
    let previousNode = null;
    if(pos === 0) {
      head = currentNode.next;
      currentNode.next = null;
      currentNode = null;
      return this;
    }
    let count = 0;
    while(count < pos) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (!currentNode.next) {
				throw new Error('Invalid max range for position.');
      }
      ++count;
    }
    previousNode.next = currentNode.next;
    currentNode.next = null;
    currentNode = null;
    return this;
  }
  this.fetchAt = function(pos) {
    if(pos < 0) {
      throw new Error('Invalid position.');
    }
    let node = head;
    if(pos === 0) {
      console.log(node.elem);
      return this;
    }
    let count = 0;
    while (count < pos) {
      node = node.next;
      ++count;
    }
    console.log(node.elem);
    return this;
  }
  this.insertAt = function(pos, elem) {
    if(pos < 0) {
      throw new Error('Invalid position.');
    }
    let node = new Node(elem);
    let currentNode = head;
    let previousNode = null;
    let count = 0;
    if(!head) {
      node = head;
      return this;
    }
    if(pos === 0) {
      head = node;
      node.elem = elem;
      node.next = currentNode;
      return this;
    }
    while(currentNode.next && count < pos) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      ++count;
    }
    previousNode.next = node;
    node.elem = elem;
    node.next = currentNode;
    return this;
  }
  this.print = function() {
    if(!head) {
      throw new Error('List is empty.');
    }
    let node = head;
    while(node) {
      console.log(node.elem);
      node = node.next;
    }
  }
  
}

let list = new LL();
list.insert(5).insert(4).insert(6).insert(0).print();
// list.insertAt(2, 3).print();
// list.fetchAt(1);
list.removeAt(1);
list.print();







