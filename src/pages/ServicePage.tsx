import Footer from "../UI/components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../utils/redux/store";
import AudioPlayer from "../UI/components/AudioPlayer";
import PreviewCarousel from "../UI/components/PreviewCarousel";
import VideoPreview from "../UI/components/VideoPreview";
import FilledButton from "../UI/components/buttons/FilledButton";
import React, {useState} from "react";
import textInputFabric from "../UI/components/textInputs/textInputFabric";
import AnimatedAlert from "../UI/components/animated/AnimatedAlert";
import {serviceApi} from "../api/ServiceApi";
import {utilityFunctions} from "../utils/utilityFunctions";
import {useNavigate} from "react-router-dom";
import {setCurrentVideoId} from "../utils/redux/userSlice";
import {useTranslation} from 'react-i18next';
import {changePage} from "../utils/redux/appSlice";  // Import useTranslation hook

const BG_VIDEOS = ['./assets/bgVideos/mc_parkour_1.mp4', './assets/bgVideos/mc_parkour_2.mp4', './assets/bgVideos/mc_parkour_3.mp4', './assets/bgVideos/mc_parkour_4.mp4'];
const MAX_TEXT_LENGTH = 1000;

const ServicePage = () => {
    const {t}: { t: (arg: string) => string } = useTranslation();
    const size = useSelector((state: RootState) => state.app.currentSize);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [serviceError, setServiceError] = useState("");
    const [storyTextError, setStoryTextError] = useState("");
    const [storyText, setStoryText] = useState("");
    const [selectedVoice, setSelectedVoice] = useState("");
    const [selectedBgVideoIndex, setSelectedBgVideoIndex] = useState<number>(Math.floor(BG_VIDEOS.length / 2));

    const textMedium = {
        textShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        fontWeight: 600,
        color: 'black',
        fontSize: size === 'large' ? 30 : size === 'medium' ? 20 : 20,
    };

    const windowStyles: any = {
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '900px',
        width: '100%',
        paddingTop: '25px',
        paddingBottom: '25px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    const StoryInput = textInputFabric(storyText, setStoryText, 'storyInput', storyTextError);

    async function handleGenerate() {
        const isTextExists = storyText.length > 0;
        const isTextValid = storyText.length < MAX_TEXT_LENGTH;

        if (!isTextValid || !isTextExists) {
            if (!isTextValid) {
                setStoryTextError(t('overreachedTextLimit'));  // Translated error message
            } else {
                setStoryTextError(t('pleaseWriteAStory'));  // Translated error message
            }
        } else {
            setStoryTextError("");
        }

        if (!selectedVoice) {
            return setServiceError(t('chooseVoiceWarning'));  // Translated error message
        } else {
            setServiceError("");
        }

        if (serviceError || storyTextError) return;

        const bgVideo = utilityFunctions.extractBgVideoNameFromPath(BG_VIDEOS[selectedBgVideoIndex]);
        // @ts-ignore
        const result = await serviceApi.generate(user.jwt, bgVideo, storyText, selectedVoice.toLocaleLowerCase());

        if (result.uid) {
            dispatch(changePage("results"));
            navigate('/results');
            setStoryText("");
            setSelectedVoice('');
            dispatch(setCurrentVideoId(result.uid));
        } else {
            console.error('Could not generate video');
        }
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 100
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                <div style={windowStyles}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <a style={textMedium}>{t('chooseBackground')}</a> {/* Translated text */}
                    </div>
                    <PreviewCarousel onChange={setSelectedBgVideoIndex}>
                        {BG_VIDEOS.map((snap) => {
                            return <VideoPreview src={snap}/>;
                        })}
                    </PreviewCarousel>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        marginBottom: 20
                    }}>
                        <a style={textMedium}>{t('chooseVoice')}</a> {/* Translated text */}
                    </div>

                    <AudioPlayer audioUrl={"./assets/voices/alloy-test.mp3"} label={t('alloyVoice')}
                                 onSelect={() => setSelectedVoice('Alloy')} selectedVoice={selectedVoice}/>
                    <AudioPlayer audioUrl={"./assets/voices/ash-test.mp3"} label={t('ashVoice')}
                                 onSelect={() => setSelectedVoice('Ash')} selectedVoice={selectedVoice}/>
                    <AudioPlayer audioUrl={"./assets/voices/echo-test.mp3"} label={t('echoVoice')}
                                 onSelect={() => setSelectedVoice('Echo')} selectedVoice={selectedVoice}/>
                    <AudioPlayer audioUrl={"./assets/voices/sage-test.mp3"} label={t('sageVoice')}
                                 onSelect={() => setSelectedVoice('Sage')} selectedVoice={selectedVoice}/>
                    <AudioPlayer audioUrl={"./assets/voices/shimmer-test.mp3"} label={t('shimmerVoice')}
                                 onSelect={() => setSelectedVoice('Shimmer')} selectedVoice={selectedVoice}/>

                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        marginBottom: 20
                    }}>
                        <a style={textMedium}>{t('writeTheStory')}</a> {/* Translated text */}
                    </div>
                    <div style={{
                        paddingRight: '50px',
                        paddingLeft: '50px',
                    }}>
                        {StoryInput}
                    </div>
                    <AnimatedAlert isVisible={!!serviceError} message={serviceError} type={'error'}/>

                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        marginBottom: 20
                    }}>
                        <FilledButton label={t('generate')} onClick={handleGenerate}/> {/* Translated text */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ServicePage;
