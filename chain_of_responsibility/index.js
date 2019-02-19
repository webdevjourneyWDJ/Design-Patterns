var Store = require('./Store');
var inventory = require('./inventory');

var wdjShop = new Store('Web Dev Journey Store', inventory);

var searchItem = 'microphone';
var results = wdjShop.find(searchItem);

console.log( results );
