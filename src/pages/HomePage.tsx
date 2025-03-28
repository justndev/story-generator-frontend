import React from 'react';
import FilledButton from "../UI/components/buttons/FilledButton";
import VideoPreview from "../UI/components/VideoPreview";
import ShortsTikTokReelsIcons from "../UI/components/ShortsTikTokReelsIcons";
import Footer from "../UI/components/Footer";
import {useSelector} from "react-redux";
import {RootState} from "../utils/redux/store";

const HomePage = () => {
    const size = useSelector((state: RootState) => state.app.currentSize)

    const promoteTextBig = {
        maxWidth: 500,
        letterSpacing: '4px',
        textShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        fontWeight: 600,
        color: 'white',
        fontSize: size === 'large' ? 90 : size === 'medium' ? 50 : 30,
        wordWrap: 'break-word',
    };

    const promoteTextMedium = {
        textShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        fontWeight: 600,
        color: 'white',
        fontSize: size === 'large' ? 30 : size === 'medium' ? 20 : 20,
    };

    // @ts-ignore
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div style={{display: "flex", flexDirection: "column", width: "100%", height: '100%', justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                        <div style={{
                            display: "flex",
                            gap: 30,
                            flexDirection: "column",
                            width: size === 'large' ? '55%' : "100%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {/* @ts-ignore*/}
                            <p style={promoteTextBig}>Build your<br/>first short<br/>video!</p>

                            {size == 'small' && (
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: '100%',
                                    justifyContent: 'center',
                                    gap: 20,
                                }}>
                                    <VideoPreview/>
                                </div>
                            )}

                            <div style={{
                                width: 500,
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <a style={promoteTextMedium}>Auto-caption</a>
                                <a style={promoteTextMedium}>AI-voice</a>
                                <a style={promoteTextMedium}>Background video</a>
                                {size == 'small' && (
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: '100%',
                                        justifyContent: 'center',
                                        gap: 20,
                                        marginTop: 20
                                    }}>
                                        <VideoPreview/>
                                    </div>
                                )}
                                <div style={{marginTop: 20}}>
                                    <FilledButton label={'Check it out!'}/>
                                </div>
                            </div>
                        </div>

                        {size != 'small' && (
                            <div style={{
                                width: "55%",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: 50
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: '100%',
                                    justifyContent: 'center',
                                    gap: size === 'large' ? 100 : size === 'medium' ? 50 : 20,
                                }}>
                                    <VideoPreview/>
                                    <VideoPreview/>
                                </div>
                                <ShortsTikTokReelsIcons/>
                            </div>
                        )}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
