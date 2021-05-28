Array.prototype.map = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i]);
  }
};

const a = [1, 2, 3];

a.map((test) => console.log("test " + test));
