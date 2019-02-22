var Shopper = require('./Shopper');
var {InventoryItem, GamingInventoryItem, UpgaradeInventoryItem} = require('./InventoryItem');

var wdj = new Shopper('Web Dev Journey', 2500);

var desktop = new InventoryItem("Desktop", 449.99);
var mouse = new InventoryItem("Mouse", 9.99);
var keyboard = new InventoryItem("keyboard", 29.99);

var gamingDesktop = new GamingInventoryItem(desktop)
var upgradedMouse = new UpgaradeInventoryItem(mouse)
var upgradedkeys = new UpgaradeInventoryItem(keyboard)

wdj.purchase(upgradedMouse);
wdj.purchase(gamingDesktop);
wdj.purchase(upgradedkeys);

wdj.printStatus();

gamingDesktop.print();
