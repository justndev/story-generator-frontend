import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {MenuProps} from "@mui/material";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export default function LanguageDropdownMenu(props: MenuProps) {
    const [language, setLanguage] = useState('');
    const {i18n} = useTranslation();

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
        switch (event.target.value) {
            // @ts-ignore
            case 20:
                localStorage.setItem('userLanguage', "ru");
                i18n.changeLanguage("ru");
                break;
            // @ts-ignore
            case 30:
                localStorage.setItem('userLanguage', "ee");
                i18n.changeLanguage("ee");
                break;
            // @ts-ignore
            case '':
                localStorage.setItem('userLanguage', "en");
                i18n.changeLanguage("en");
                break;
        }
    };

    function getFirstLanguage() {
        const userLanguage = localStorage.getItem('userLanguage');
        if (userLanguage) {
            switch (userLanguage) {
                case 'en':
                    return '';
                case 'ru':
                    return 20;
                case 'ee':
                    return 30;
            }
        }
        return '';
    }

    return (
        <div style={{
            height: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <FormControl sx={{m: 2, minWidth: 120}} size="small">
                <Select
                    // @ts-ignore
                    value={getFirstLanguage()}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                    sx={{
                        borderColor: 'black',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '& .MuiSelect-icon': {
                            color: 'black', // Optional: changes dropdown icon color
                        },
                    }}
                >
                    <MenuItem value={''}>
                        English
                    </MenuItem>
                    <MenuItem value={20}>Русский</MenuItem>
                    <MenuItem value={30}>Eesti</MenuItem>
                </Select>
            </FormControl>
        </div>

    );
}
