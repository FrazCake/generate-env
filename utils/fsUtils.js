const path = require("path");
const fs = require("fs");
const glob = require("fast-glob");
const { commonConfigFilename, projectConfigurationsPath, rootPath, templateFilename } = require("../config");
const messages = require("../messages");
const EnvConfigMissing = require("../exceptions/EnvConfigMissing");

const getConfig = (envName) => {
  try {
    return require(path.join(projectConfigurationsPath, envName));
  } catch {
    throw new EnvConfigMissing(envName);
  }
};

const getCommonConfig = () => {
  try {
    return getConfig(commonConfigFilename);
  } catch (error) {
    console.warn(messages.noConfigFound("Common"));
    return {};
  }
};

const readFileSafe = async (filepath) => {
  try {
    return await fs.promises.readFile(filepath, { encoding: "utf8" });
  } catch {}
};

const findTemplateFiles = () => {
  const searchPattern = path.join(rootPath, "**", templateFilename);
  const searchOptions = { caseSensitiveMatch: false, cwd: rootPath, absolute: true, ignore: ["**/node_modules/**"] };
  return glob(searchPattern, searchOptions);
};

module.exports = {
  getCommonConfig,
  getConfig,
  readFileSafe,
  findTemplateFiles,
};
