var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var dressShoes = new CatalogItem("Wingtip Shoes", 179.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("Flip Flops", 9.99);

var group_shoes = new CatalogGroup("Shoes Group", [dressShoes, sneakers, flipFlops]);

var group_food = new CatalogGroup("Fancy Food", [
  new CatalogItem("milkshakes", 5.99),
  new CatalogItem("French Fries", 3.99),
])

var keyChain = new CatalogItem('Key Chain', 6.99);

var storeCatalog = new CatalogGroup("Store Catalog", [keyChain, group_shoes, group_food]);

console.log(`$${storeCatalog.total}`);

storeCatalog.print();
