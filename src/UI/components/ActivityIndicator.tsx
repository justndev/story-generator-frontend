import React, {useState} from "react";
import {Box, CircularProgress} from "@mui/material";
import BigLabel from "./labels/BigLabel";
import {useTranslation} from "react-i18next";

export default function ActivityIndicator({isLoading}: {isLoading: boolean}) {
    const {t}:{t:(arg:string) => string} = useTranslation();

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* @ts-ignore */}
            <BigLabel label={isLoading ? t('inProgress') : t('done')} color={'#595959'}/>
            {/* @ts-ignore*/}
            {isLoading && <CircularProgress size={60}/>}
        </Box>
    );
}
