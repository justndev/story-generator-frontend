import TextButton from "./buttons/TextButton";
import {useTranslation} from "react-i18next";

const isMobile = true;

const Footer = ({textColor = 'black'}:{textColor?: string}) => {
    const {t}: {t: (arg: string) => string} = useTranslation();
    return (
        // @ts-ignore
        <div style={footerStyles}>

            <div style={absoluteButtonStyles}>
                <TextButton label={'ndev'} color={textColor} />
            </div>

            {/* Regular buttons */}
            <TextButton label={t('privacyPolicy')} color={textColor} />
            <TextButton label={t('termsOfUse')} color={textColor} />
        </div>
    );
}

export default Footer;

const footerStyles = {
    position: 'relative', // Make parent a reference point for absolute positioning
    width: '100%',
    justifyContent: isMobile ? 'flex-end' : 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row', // Align buttons horizontally
    gap: isMobile ? '10px' : '3px',
};

const absoluteButtonStyles: any = {
    position: 'absolute',
    top: '0px', // Adjust the top position
    left: '0px', // Adjust the left position
};
