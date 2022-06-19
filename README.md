# generate-env

Simple script that generate .env files by parsing .template-env files and replacing placeholder with values read from `/config/envs/<env>.json`.

The reason behind this tool is to write all the configuration in a central place and spread the values across all the env files where needed.

## Example

.template-env

```yml
SERVICE_X_API_KEY={{x.apiKey}}
SERVICE_X_NAME={{x.name}}

SERVICE_Y_API_KEY={{y.apiKey}}
SERVICE_Y_NAME={{y.name}}
```

/config/envs/dev.json

```json
{
  "x": {
    "apiKey": "aSuperSecretApiKeyHere",
    "name": "amazingServiceX"
  },
  "y": {
    "apiKey": "anotherSuperSecretApiKeyHere",
    "name": "amazingServiceY"
  }
}
```

than just exec:

```shell
yarn generate-env dev
```

Now for each .template-env file in your codebase, a new .env file will be created/updated with the variable read from the central configuration.

You can easily push your secrets stored in configuration by encrypting them with some tools like [Mozilla sops](https://github.com/mozilla/sops) or other similar [tools](https://opensource.com/article/19/2/secrets-management-tools-git).
