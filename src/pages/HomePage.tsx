import React from 'react';
import FilledButton from "../UI/components/buttons/FilledButton";
import VideoPreview from "../UI/components/VideoPreview";
import ShortsTikTokReelsIcons from "../UI/components/ShortsTikTokReelsIcons";
import Footer from "../UI/components/Footer";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../utils/redux/store";
import { bgVideos } from "../constants/snaps";
import { useTranslation } from 'react-i18next';
import {useNavigate} from "react-router-dom";
import {changePage} from "../utils/redux/appSlice"; // Import useTranslation hook

const HomePage = () => {
    const { t }: {t: (arg: string) => string} = useTranslation();  // Initialize i18n function
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const size = useSelector((state: RootState) => state.app.currentSize);
    const user = useSelector((state: RootState) => state.user.user);

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

    function goToService() {
        navigate("/service");
        if (user) {
            dispatch(changePage("service"));
        } else {
            dispatch(changePage("auth"));
        }
    }

    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div style={{ display: "flex", flexDirection: "column", width: "100%", height: '100%', justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <div style={{
                            display: "flex",
                            gap: 30,
                            flexDirection: "column",
                            width: size === 'large' ? '55%' : "100%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {/* @ts-ignore*/}
                            <p style={promoteTextBig}>{t('buildYourVideo')}</p> {/* Translated text */}

                            {size === 'small' && (
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: '100%',
                                    justifyContent: 'center',
                                    gap: 20,
                                }}>
                                    <VideoPreview src={bgVideos.story1} />
                                </div>
                            )}

                            <div style={{
                                width: 500,
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <a style={promoteTextMedium}>{t('autoCaption')}</a> {/* Translated text */}
                                <a style={promoteTextMedium}>{t('aiVoice')}</a> {/* Translated text */}
                                <a style={promoteTextMedium}>{t('backgroundVideo')}</a> {/* Translated text */}
                                {size === 'small' && (
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: '100%',
                                        justifyContent: 'center',
                                        gap: 20,
                                        marginTop: 20
                                    }}>
                                        <VideoPreview src={bgVideos.story2} />
                                    </div>
                                )}
                                <div style={{ marginTop: 20 }}>
                                    <FilledButton label={t('checkItOut')} onClick={goToService} />
                                </div>
                            </div>
                        </div>

                        {size !== 'small' && (
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
                                    <VideoPreview src={bgVideos.story1} />
                                    <VideoPreview src={bgVideos.story2} />
                                </div>
                                <ShortsTikTokReelsIcons />
                            </div>
                        )}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
