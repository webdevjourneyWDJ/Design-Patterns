var scout_prototype = require('./scout_prototype');

var wdj = scout_prototype.clone();
wdj.name = "Web Dev Journey"
wdj.addItemToList('slingshot');

var mike = scout_prototype.clone();
mike.name = "Mike Longjohn Silver"
mike.addItemToList('reading light');

console.log( `${wdj.name}: ${wdj.shoppingList}` );
console.log( `${mike.name}: ${mike.shoppingList}` );
