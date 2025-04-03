import Footer from "../UI/components/Footer";
import ProgressBar from "../UI/components/ProgressBar";
import {useSelector} from "react-redux";
import {RootState} from "../utils/redux/store";
import FilledButton from "../UI/components/buttons/FilledButton";
import {serviceApi} from "../api/ServiceApi";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import ActivityIndicator from "../UI/components/ActivityIndicator";
import {useTranslation} from "react-i18next";

const ResultsPage = () => {
    const { t }: {t: (arg: string) => string} = useTranslation();  // Initialize i18n function
    const size = useSelector((state: RootState) => state.app.currentSize);
    const user = useSelector((state: RootState) => state.user.user);

    const [isGenerating, setIsGenerating] = useState(true);

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

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        const checkProductStatus = async () => {
            try {
                // @ts-ignore
                const result = await serviceApi.checkStatus(user.jwt, user.currentVideoId);
                if (result.status === 'completed') {
                    setIsGenerating(false);
                    clearInterval(intervalId);
                }
            } catch (error) {
                console.error("Error checking product status:", error);
                // Optionally handle errors (e.g., retry logic or user notification)
            }
        };

        // Initial check
        checkProductStatus();

        // Set up polling interval (every 5 seconds)
        intervalId = setInterval(checkProductStatus, 5000);

        // Clean up interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [user]);


    async function download() {
        // @ts-ignore
        await serviceApi.download(user.jwt, user.currentVideoId)
    }
    return (
        <div
            style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: 100}}>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', flexDirection: 'column'}}>
                <div style={windowStyles}>
                    {/*<ProgressBar/>*/}
                    <ActivityIndicator isLoading={isGenerating}/>
                    {/* @ts-ignore*/}
                    <FilledButton label={t('download')} onClick={download} disabled={isGenerating} />
                    {/* @ts-ignore*/}
                    <a style={textBig}>{t('yourAdHere')}</a>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default ResultsPage;
