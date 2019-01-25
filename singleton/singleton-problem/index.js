var Logger = require('./Logger');
var Shopper = require('./Shopper');
var Store = require('./Store');

var logger = new Logger();

logger.log('starting app...');

var wdj = new Shopper('wdj', 500)
var tech_shop = new Store('Web Dev Journey Supplies', [
    {
        item: 'extended mouse pads/mats',
        qty: 5,
        price: 20
    },
    {
        item: 'Kicking Horse Coffee',
        qty: 20,
        price: 30
    }
])

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`${log.message}`));
