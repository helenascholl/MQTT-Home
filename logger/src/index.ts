import mqtt from 'mqtt';
import dotenv from 'dotenv';
import MongoDb from './db';

dotenv.config();

const mongo = new MongoDb('logger');

const url = process.env['NODE_ENV'] === 'production' ?
  'mqtt://mqtt' :
  `mqtt://${process.env['MQTT_BROKER_HOSTNAME']}`;

const client = mqtt.connect(url, { clientId: 'logger' });

client.on('connect', () => {
  console.log('Connected to MQTT Broker');

  client.subscribe('#', error => {
    if (error) {
      console.error(error);
    }
  });
});

client.on('message', (topic, message) => {
  const currentDate = new Date();
  const messageString = message.toString();

  mongo.db?.collection('mqtt').insertOne({
    timestamp: currentDate.getTime(),
    topic: topic,
    message: messageString
  });

  console.log(`${currentDate.toISOString()} Topic: ${topic} - Message: '${messageString}'`);
});
