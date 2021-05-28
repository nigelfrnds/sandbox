const _ = require('lodash');

function Person() {
  this.name = 'nigel';
}

Person.prototype.greet = function () {
  console.log('My name is', this.name);
};

const p = new Person();

function debounce(fn, wait = 0) {
  if (typeof fn !== 'function') {
    throw new Error('A function is required as paramater');
  }

  return function () {
    setTimeout(() => fn(), wait);
  };
}

debounce(() => p.greet(), 500)();
_.debounce(p.greet, 500)();
