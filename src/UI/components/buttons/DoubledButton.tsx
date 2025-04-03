import {Button} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import {useTranslation} from "react-i18next";

const DoubledFormButton = ({isLogInOpened = false, onChange = () => null}:{isLogInOpened: boolean, onChange: () => void}) => {
    const { t }: {t: (arg: string) => string} = useTranslation();  // Initialize i18n function

    return (
        <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <Button
                disabled={isLogInOpened}
                onClick={onChange}
                variant="contained"
                size="large"
                sx={{width: '100%'}}
                color="primary"
            >
                {t('loginShort')}
            </Button>
            <Button
                sx={{width: '100%'}}
                disabled={!isLogInOpened}
                onClick={onChange}
                variant="contained"
                size="large"
                color="primary"
            >
                {t('signupShort')}
            </Button>
        </div>

    )
}

export default DoubledFormButton;
