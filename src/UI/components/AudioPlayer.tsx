import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import CustomIcon from "./CustomIcon";
import {icons} from "../../constants/icons";

interface AudioPlayerProps {
    audioUrl: string;
    label: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, label }) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (waveformRef.current) {
            wavesurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'black',
                progressColor: '#383351',
                cursorColor: '#383351',
                cursorWidth: 4,
                barWidth: 6,
                barRadius: 3,
                width: 290,
                height: 30,
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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
            <div style={{width: 100, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <a style={{fontSize: '22px', fontWeight: '500'}}>{label}</a>

            </div>
            <div style={{width:'360px', paddingRight: '10px', height:'51px', borderColor: 'black', borderWidth: '2px', borderRadius: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{cursor:'pointer', height:'48px', width:'49px', backgroundColor: '#e3e3e3', borderRadius: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex'}} onClick={handlePlayPause}>
                    {isPlaying ?
                        <div>
                            <CustomIcon icon={icons.pause} />

                        </div>
                        :
                        <div style={{paddingLeft:'5px'}}>
                            <CustomIcon icon={icons.play} />
                        </div>
                    }
                </div>
                <div ref={waveformRef} />

            </div>
        </div>

    );
};

export default AudioPlayer;
