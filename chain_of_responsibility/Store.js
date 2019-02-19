const Storage = require('./Storage');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;

        var floor = new Storage('store floor', inventory.floor);
        var backroom = new Storage('store backroom', inventory.backroom);
        var localstore = new Storage('store localstore', inventory.localStore, 1);
        var warehouse = new Storage('store warehouse', inventory.warehouse, 5);

        this.storage = floor;

        floor.setNext(backroom);
        backroom.setNext(localstore);
        localstore.setNext(warehouse);
    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

module.exports = Store;
