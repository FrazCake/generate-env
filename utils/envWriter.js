const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const UndefinedVariable = require("../exceptions/UndefinedVariable");
const { outputFilename } = require("../config");
const { readFileSafe } = require("./fsUtils");

const envWriter = (configuration, templateFiles) => {
  const filePromises = templateFiles.map(async (filepath) => {
    const template = await fs.promises.readFile(filepath, "utf8");
    const placeholderReplacer = (_match, varPath) => {
      const value = _.get(configuration, varPath);
      if (_.isUndefined(value)) {
        throw new UndefinedVariable(varPath);
      }
      return value;
    };
    const parsedTemplate = template.replace(/\{\{(.*?)\}\}/g, placeholderReplacer);

    const destination = path.join(path.dirname(filepath), outputFilename);
    const currentContent = await readFileSafe(destination);

    if (currentContent !== parsedTemplate) {
      fs.promises.writeFile(destination, parsedTemplate, "utf8");
    }
  });
  return Promise.all(filePromises);
};

module.exports = envWriter;
