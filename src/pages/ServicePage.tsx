import Footer from "../UI/components/Footer";
import {useSelector} from "react-redux";
import {RootState} from "../utils/redux/store";
import AudioPlayer from "../UI/components/AudioPlayer";
import PreviewCarousel from "../UI/components/PreviewCarousel";
import VideoPreview from "../UI/components/VideoPreview";
import StoryTextInput from "../UI/components/textInputs/StoryTextInput";
import FilledButton from "../UI/components/buttons/FilledButton";
import {useState} from "react";
import textInputFabric from "../UI/components/textInputs/textInputFabric";
import AnimatedAlert from "../UI/components/animated/AnimatedAlert";

const GIFS = ['./assets/gifs/sample/gif', './assets/gifs/sample/gif', './assets/gifs/sample/gif']
const MAX_TEXT_LENGTH = 1000;

const ServicePage = () => {
    const size = useSelector((state: RootState) => state.app.currentSize);
    const [serviceError, setServiceError] = useState("");
    const [storyTextError, setStoryTextError] = useState("");
    const [storyText, setStoryText] = useState("");
    const [selectedVoice, setSelectedVoice] = useState("");
    const [selectedBgVideoIndex, setSelectedBgVideoIndex] = useState<number>(Math.floor(GIFS.length/2));

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
    }
    const StoryInput = textInputFabric(storyText, setStoryText, 'storyInput', storyTextError)

    function handleGenerate() {
        const bgVideoId = GIFS[selectedBgVideoIndex];
        const isTextExists = storyText.length > 0;
        const isTextValid = storyText.length < MAX_TEXT_LENGTH;

        if (!isTextValid || !isTextExists) {
            if (!isTextValid) {
                setStoryTextError("Overreached characters limit. Maximum 1000");
            } else {setStoryTextError("Please write a story!");}
        } else {
            setStoryTextError("");
        }
        if (!selectedVoice) {
            return setServiceError("Please choose a voice!");
        } else {setServiceError("");}
        if (serviceError || storyTextError) return
        const dto ={bgVideoId, storyText, selectedVoice};
        console.log("dto",dto);

    }
    const Carousel = () => {
        return (
            <PreviewCarousel onChange={setSelectedBgVideoIndex}>
                {GIFS.map((gif) => {
                    return <VideoPreview src={gif}/>
                })}
            </PreviewCarousel>
        )
    }

    return <div
        style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 100
        }}>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <div style={windowStyles}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <a style={textMedium}>Choose Background </a>
                </div>
                <PreviewCarousel onChange={setSelectedBgVideoIndex}>
                    <VideoPreview/>
                    <VideoPreview/>
                    <VideoPreview/>
                </PreviewCarousel>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    marginBottom: 20
                }}>

                    <a style={textMedium}>Choose Voice </a>
                </div>

                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Ben'} onSelect={() => setSelectedVoice('Ben')} selectedVoice={selectedVoice}/>
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Ashley'} onSelect={() => setSelectedVoice('Ashley')} selectedVoice={selectedVoice}/>
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Oslo'} onSelect={() => setSelectedVoice('Oslo')} selectedVoice={selectedVoice}/>
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Adolf'} onSelect={() => setSelectedVoice('Adolf')} selectedVoice={selectedVoice}/>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    marginBottom: 20
                }}>

                    <a style={textMedium}>Write the Story</a>
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

                    <FilledButton label={"Generate!"} onClick={handleGenerate}/>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
}

export default ServicePage;
