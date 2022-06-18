const path = require("path");

const rootPath = process.cwd();

const config = {
  rootPath,
  templateFilename: ".template-env",
  outputFilename: ".env",
  projectConfigurationsPath: path.join(rootPath, "config", "envs"),
  commonConfigFilename: "common.json",
};

module.exports = config;
