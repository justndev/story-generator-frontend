import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import CustomIcon from "./CustomIcon";
import {icons} from "../../constants/icons";

interface AudioPlayerProps {
    audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (waveformRef.current) {
            wavesurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#4F4A85',
                progressColor: '#383351',
                cursorColor: '#383351',
                barWidth: 3,
                barRadius: 3,
                responsive: true,
                height: 50,
                normalize: true,
            });

            wavesurferRef.current.load(audioUrl);

            wavesurferRef.current.on('play', () => setIsPlaying(true));
            wavesurferRef.current.on('pause', () => setIsPlaying(false));
            wavesurferRef.current.on('finish', () => setIsPlaying(false));
        }

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
            }
        };
    }, [audioUrl]);

    const handlePlayPause = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.playPause();
        }
    };

    return (
        <div style={{width:'300px', height:'20px'}}>
            <div ref={waveformRef} />

        </div>
    );
};

export default AudioPlayer;
