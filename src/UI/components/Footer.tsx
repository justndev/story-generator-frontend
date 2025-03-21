import TextButton from "./buttons/TextButton";
import {useMediaQuery} from "@mui/material";
import {useEffect} from "react";

const isMobile = true;

const Footer = ({textColor = 'black'}:{textColor?: string}) => {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <div style={footerStyles}>

            <div style={absoluteButtonStyles}>
                <TextButton label={'ndev'} color={textColor} />
            </div>

            {/* Regular buttons */}
            <TextButton label={'Privacy Policy'} color={textColor} />
            <TextButton label={'Terms of Use'} color={textColor} />
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
