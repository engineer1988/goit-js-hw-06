'use strict';
class Sttorage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const sttorage = new Sttorage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(sttorage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

sttorage.addItem('Droid');
console.log(sttorage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

sttorage.removeItem('Prolonger');
console.log(sttorage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
