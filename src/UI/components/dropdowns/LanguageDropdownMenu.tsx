import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {MenuProps} from "@mui/material";
import {useEffect, useState} from "react";

export default function LanguageDropdownMenu(props: MenuProps) {
    const [language, setLanguage] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
        // TODO: change system language
    };

    return (
        <div style={{height: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <FormControl sx={{m: 2, minWidth: 120}} size="small">
                <Select
                    value={language}
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
                    <MenuItem value="">
                        English
                    </MenuItem>
                    <MenuItem value={20}>Русский</MenuItem>
                    <MenuItem value={30}>Eesti</MenuItem>
                </Select>
            </FormControl>
        </div>

    );
}
