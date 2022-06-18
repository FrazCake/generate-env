module.exports = {
  invalidArgs:
    "This script accept exactly one param that is the environment that you want to set up: 'yarn generate-env development'",
  noConfigFound: (env) => `${env.toUpperCase()} configuration not found`,
  envWriteSuccess: "all env files has been created",
};
