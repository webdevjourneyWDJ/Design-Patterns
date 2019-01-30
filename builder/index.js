var PersonBuilder = require('./PersonBuilder')

// Employees
 var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
 var patrick = new PersonBuilder('Patrick').makeEmployee().makePartTime().build();
 var john = new PersonBuilder('John').makeEmployee().build();
// var sue = new Person('Sue', true, true, 60);
// var patrick = new Person('Patrick', true, false, 20);
// var john = new Person('John', true, false);

// Shoppers
var mike = new PersonBuilder('Mike')
          .withMoney(500)
          .withList(['jeans', 'sunglasses'])
          .build();
var wdj = new PersonBuilder('WDJ').withMoney('1000').build();
// var mike = new Person('Mike', false, false, 0, 500, ['jeans', 'sunglasses']);
// var wdj = new Person('WDJ', false, false, 0, 1000);


console.log(mike.toString());
console.log(sue.toString());
