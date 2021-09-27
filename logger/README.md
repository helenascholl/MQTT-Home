# Logger

Logs all traffic going through the MQTT Broker in a MongoDB.

## Start the service

Create a `.env` file based on `template.env`, fill in your MQTT Broker's
hostname and change the Mongo Express password.

After starting the Logger, the Mongo Express server will be available at
`http://localhost:8081`.

### Development

```shell
docker-compose -f docker-compose.dev.yml up

npm install
npm run start:dev
```

### Production

```shell
docker-compose up -d
```
