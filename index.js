#!/usr/bin/env node

const _ = require("lodash");
const getEnvName = require("./utils/getEnvName");
const { getCommonConfig, getConfig, findTemplateFiles } = require("./utils/fsUtils");
const envWriter = require("./utils/envWriter");
const { envWriteSuccess } = require("./messages");

(async () => {
  try {
    const toBeSetupEnvName = getEnvName();
    const commonEnvConfig = getCommonConfig();
    const toBeSetupEnvConfig = getConfig(toBeSetupEnvName);
    const mergedConfig = _.merge(commonEnvConfig, toBeSetupEnvConfig);
    const templateFiles = await findTemplateFiles();

    await envWriter(mergedConfig, templateFiles);
    console.info(envWriteSuccess);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();
