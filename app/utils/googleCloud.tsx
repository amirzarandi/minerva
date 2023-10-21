const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

module.exports = client;
