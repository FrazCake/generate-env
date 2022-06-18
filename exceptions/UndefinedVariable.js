class UndefinedVariable extends Error {
  constructor(variable = "") {
    super(`Undefined variable ${variable}`);
  }
}

module.exports = UndefinedVariable;
