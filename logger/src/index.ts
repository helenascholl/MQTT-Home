import mqtt from 'mqtt';
import dotenv from 'dotenv';

dotenv.config();

const mqttClient = mqtt.connect(`mqtt://${process.env['MQTT_BROKER_HOSTNAME']}`, { clientId: 'logger' });

mqttClient.on('connect', () => {
  console.log('Connected to MQTT Broker');

  mqttClient.subscribe('#', error => {
    if (error) {
      console.error(error);
    }
  });
});

mqttClient.on('message', (topic, message) => {
  console.log(topic, message.toString());
});
