import {Button} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";

const DoubledFormButton = ({isLogInOpened = false, onChange = () => null}:{isLogInOpened: boolean, onChange: () => void}) => {

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
                Log In
            </Button>
            <Button
                sx={{width: '100%'}}
                disabled={!isLogInOpened}
                onClick={onChange}
                variant="contained"
                size="large"
                color="primary"
            >
                Sign Up
            </Button>
        </div>

    )
}

export default DoubledFormButton;
