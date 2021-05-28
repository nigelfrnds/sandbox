Array.prototype.flat = function (depth = 1) {
  let flatArray = [];

  if (this.length) {
    const elem = this.shift();

    if (Array.isArray(elem) && depth >= 1) {
      flatArray = flatArray.concat(this.flat.call(elem, depth - 1));
    } else {
      flatArray.push(elem);
    }

    flatArray = flatArray.concat(this.flat.call(this, depth));

    this.unshift(elem);
  }

  return flatArray;
};

const a = [1, 2, 3, [4, 5], [[6, 7]], [[[8, 9]]]];
console.log("\nresult at depth = 1 ", a.flat());
console.log("\nresult at depth = 2 ", a.flat(2));
