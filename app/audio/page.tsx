import React, { useState, useRef } from 'react';

export default function Home() {
    const [transcription, setTranscription] = useState<string>('');
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const audioChunks = useRef<BlobPart[]>([]); // Typed as BlobPart[]
    const mediaRecorder = useRef<MediaRecorder | null>(null);

    const isMediaRecorderSupported = (): boolean => {
        return typeof MediaRecorder !== 'undefined';
    };

    const startRecording = async () => {
        if (!isMediaRecorderSupported()) {
            console.error('MediaRecorder is not supported in this browser.');
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            mediaRecorder.current = new MediaRecorder(stream);

            if (mediaRecorder.current) {
                mediaRecorder.current.ondataavailable = event => {
                    audioChunks.current.push(event.data);
                };

                mediaRecorder.current.onstop = async () => {
                    const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
                    const formData = new FormData();
                    formData.append('audio', audioBlob);

                    try {
                        const response = await fetch('/api/transcribe', {
                            method: 'POST',
                            body: formData,
                        });

                        const data = await response.json();
                        setTranscription(data.transcription);
                    } catch (error) {
                        console.error('Error sending audio data:', error);
                    }
                };

                mediaRecorder.current.start();
                setIsRecording(true);
            }
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <div>
            {isRecording ? (
                <button onClick={stopRecording}>Stop Recording</button>
            ) : (
                <button onClick={startRecording}>Start Recording</button>
            )}
            <p>Transcription: {transcription}</p>
        </div>
    );
}