class EnvConfigMissing extends Error {
  constructor(env = "Env") {
    super(`${env} configuration missing or empty`);
  }
}

module.exports = EnvConfigMissing;
