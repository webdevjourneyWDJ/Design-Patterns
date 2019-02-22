class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }

}

class GamingInventoryItem {
  constructor(baseItem) {
    this.name = `Gaming ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
  }

  print(){
    console.log(`${this.name} costs a lot of money...`);
  }
}

class UpgaradeInventoryItem {
  constructor(baseItem) {
    this.name = `Upgraded ${baseItem.name}`;
    this.price = 40 + baseItem.price;
  }
}

module.exports = {InventoryItem, GamingInventoryItem, UpgaradeInventoryItem};
