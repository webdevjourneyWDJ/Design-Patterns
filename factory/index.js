var userFactory = require('./userFactory');

var wdj = userFactory('Web Dev Journey', 100);
var mike = userFactory('Mike Longjohn Silver', 100, 'employee', 'Original Inc.');

mike.payDay(1);

console.log( wdj.toString() )
console.log( mike.toString() )
