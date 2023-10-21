import client from '../utils/googleCloud';

const transcribeAudio = async (req, res) => {
    const audio = req.body;

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };

    const gcsRequest = {
        audio: { content: audio },
        config: config,
    };

    try {
        const [response] = await client.recognize(gcsRequest);
        const transcription = response.results
            .map(result => result.alternatives[0].transcript)
            .join('\n');
        res.send({ transcription });
    } catch (error) {
        res.status(500).send({ error: 'Error transcribing audio.' });
    }
};

export default transcribeAudio;
