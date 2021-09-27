import mqtt from 'mqtt';
import dotenv from 'dotenv';

dotenv.config();

const client = mqtt.connect(`mqtt://${process.env['MQTT_BROKER_HOSTNAME']}`, { clientId: 'logger' });

client.on('connect', () => {
  console.log('Connected to MQTT Broker');

  client.subscribe('#', error => {
    if (error) {
      console.error(error);
    }
  });
});

client.on('message', (topic, message) => {
  console.log(topic, message.toString());
});
