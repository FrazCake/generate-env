const { invalidArgs } = require("../messages");

class InvalidArgs extends Error {
  constructor() {
    super(invalidArgs);
  }
}

module.exports = InvalidArgs;
