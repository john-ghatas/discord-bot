# Random Generator Discord Bot

This discord bot is written as an exercise. This bot can be deployed via Docker.

## Pre-requisites

| Utility  | OS      |
| -------- | ------- |
| Node     | X       |
| Docker   | X       |
| Git Bash | Windows |

## How to run the bot

### Logging in to the bot

Before running the bot, a local .env file needs to be created on the deployment/development with the following key:

| Key       | Description                        | Default |
| --------- | ---------------------------------- | ------- |
| BOT_TOKEN | The token used to login to the bot | None    |

The file where the functions are programmed is in `lib/index.js`.

### Deploying the bot for development or production

### NPM

To run the bot when developing, run `npm ci && npm start`, if no errors occur and the code starts up fine you're good to go. This
is recommended to do before deploying it in a Docker container to make sure everything is set up right.

### Docker

To deploy the docker container, call the script in the scripts folder from the root folder of the project with one of the 2 commands listed below:

`sh scripts/build-docker.sh`

`./scripts/build-docker.sh`
