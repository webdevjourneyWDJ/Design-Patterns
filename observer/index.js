var Store = require('./Store');
var Shopper = require('./Shopper');
var Mall = require('./Mall');

var original = new Store("Original Things");
var gubber = new Store("Gubber Fubber");

var wdj = new Shopper("WDJ");
var mike = new Shopper("Mike");
var pete = new Shopper("Pete");
var sam = new Shopper("Sam");

var originalMall = new Mall();

original.subscirbe(wdj);
original.subscirbe(sam);
original.subscirbe(pete);
original.subscirbe(originalMall);

gubber.subscirbe(mike);
gubber.subscirbe(originalMall);

original.sale(99);
gubber.sale(.1);

console.log(originalMall.sales);
