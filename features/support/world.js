// features/support/world.js

var expect = require('chai').expect

function World() {
}

module.exports = function() {
  this.World = World;
};
