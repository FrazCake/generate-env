const InvalidArgs = require("../exceptions/InvalidArgs");

const getEnvName = () => {
  const envName = process.argv[2];
  if (!envName) {
    throw new InvalidArgs();
  }
  return envName;
};

module.exports = getEnvName;
