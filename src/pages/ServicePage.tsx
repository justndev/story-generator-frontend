import Footer from "../UI/components/Footer";
import {useSelector} from "react-redux";
import {RootState} from "../utils/redux/store";
import AudioPlayer from "../UI/components/AudioPlayer";
import PreviewCarousel from "../UI/components/PreviewCarousel";
import VideoPreview from "../UI/components/VideoPreview";
import StoryTextInput from "../UI/components/textInputs/StoryTextInput";
import FilledButton from "../UI/components/buttons/FilledButton";

const ServicePage = () => {
    const size = useSelector((state: RootState) => state.app.currentSize);
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
                <PreviewCarousel>
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
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Ben'}/>
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Ashley'}/>
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Oslo'}/>
                <AudioPlayer audioUrl={"./assets/music.mp3"} label={'Adolf'}/>
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
                    <StoryTextInput/>

                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    marginBottom: 20
                }}>
                    <FilledButton label={"Generate!"}/>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
}

export default ServicePage;
