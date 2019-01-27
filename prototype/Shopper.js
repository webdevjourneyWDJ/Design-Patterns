class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone() {
      var shopperClassCopy = Object.getPrototypeOf(this);
      var instance = Object.create(shopperClassCopy);

      instance._name = this._name;
      instance._shoppingList = [...this._shoppingList];

      return instance;
    }
}

module.exports = Shopper;
