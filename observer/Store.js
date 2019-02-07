class Store {

    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscirbe(observer) {
      this.subscribers.push(observer);
    }

    sale(discount) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount));
    }

}

module.exports = Store;
