var InventoryItem = require('./InventoryItem');
const Iterator = require('./Iterator');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

var inventory = new Iterator([
    new InventoryItem("mouse", 9.99),
    new InventoryItem("mouse pad", 19.99),
    new InventoryItem("keyboard", 129.99),
    new InventoryItem("monitor", 159.99),
    new InventoryItem("mic", 54.99),
    new InventoryItem("desktop", 1299.99),
    new InventoryItem("laptop", 899.99),
    new InventoryItem("memory", 199.99)
]);

process.stdin.on('keypress', (str, key) => {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch(key.name) {

        case 'right' :
            inventory.next().writeLn();
            break;

        case 'left' :
            inventory.prev().writeLn();
            break;

        case 'down' :
            inventory.last().writeLn();
            break;

        case 'up' :
            inventory.first().writeLn();
            break;

        case 'c' :
            if (key.ctrl) {
                process.exit()
            }
    }

});
