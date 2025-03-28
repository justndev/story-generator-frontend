import AuthForm from "../UI/components/forms/AuthForm";
import Footer from "../UI/components/Footer";
import ProgressBar from "../UI/components/ProgressBar";
import {useSelector} from "react-redux";
import {RootState} from "../utils/redux/store";

const ResultsPage = () => {
    const size = useSelector((state: RootState) => state.app.currentSize);
    const windowStyles: any = {
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '900px',
        width: '100%',
        padding: '30px',
        paddingTop: '25px',
        paddingBottom: '25px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
    const textBig = {
        letterSpacing: '4px',
        alignSelf: 'center',
        textShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        fontWeight: 600,
        color: 'black',
        fontSize: size === 'large' ? 90 : size === 'medium' ? 50 : 30,
        wordWrap: 'break-word',
    };
    return (
        <div
            style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: 100}}>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', flexDirection: 'column'}}>
                <div style={windowStyles}>
                    <ProgressBar/>
                    {/* @ts-ignore*/}
                    <a style={textBig}>Your Ad here</a>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ResultsPage;
